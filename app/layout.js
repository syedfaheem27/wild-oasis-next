import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationContextProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s /  The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "luxurious cabin hotel, located in the heart of the Kashmir Valley, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className=" min-h-screen px-8 py-12 grid">
          <main className="max-w-7xl  mx-auto w-full">
            <ReservationContextProvider>{children}</ReservationContextProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
