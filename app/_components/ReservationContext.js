"use client";

const { createContext, useState, useContext } = require("react");

const initialState = { from: undefined, to: undefined };

const ReservationContext = createContext();

export function ReservationContextProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (!context)
    throw new Error(
      "Trying to access the Reservation context outside a provider!"
    );

  return context;
}
