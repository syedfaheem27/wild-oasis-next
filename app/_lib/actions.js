"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to perform this action!");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const updatedData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const regexNationalId = /^[a-zA-Z0-9]{3,8}$/;

  if (!regexNationalId.test(nationalID))
    throw new Error(
      "Invalid nationalID. It should be an alphanumeric string of length between 3 and 8 characters!"
    );

  const guestId = session.user.guestId;

  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to perform this action!");

  console.log(bookingId);

  //This piece of code protects other bookings from being
  //deleted by any user
  const bookings = await getBookings(session.user.guestId);
  const bookingIds = bookings.map((booking) => booking.id);

  if (!bookingIds.includes(bookingId))
    throw new Error("Your are not authorized to delete this booking!");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}
