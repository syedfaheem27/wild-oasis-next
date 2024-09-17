import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import {
  getBookedDatesByCabinId,
  getBooking,
  getSettings,
} from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="overflow-hidden grid grid-cols-2 min-h-[400px]  border border-primary-300">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm user={session.user} cabin={cabin} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
