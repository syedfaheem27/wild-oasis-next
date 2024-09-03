import { Suspense } from "react";
import CabinsList from "@/app/_components/CabinsList";
import Spinner from "@/app/_components/Spinner";
import Filter from "../_components/Filter";

/*Instead of doing it here, 
  doing it in CabinsList, will opt out the entire 
  page from the data cache which can be better when we 
  think of partial pre rendering
*/

// export const revalidate = 0;
// export const dynamic = "force-dynamic";

export const revalidate = 86400;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  // noStore();

  const capacity = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Kashmir
        valley. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={capacity}>
        <CabinsList capacity={capacity} />
      </Suspense>
    </div>
  );
}
