"use server";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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
}
