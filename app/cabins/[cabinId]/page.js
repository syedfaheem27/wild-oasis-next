import Cabin from "@/app/_components/Cabin";
import Reservations from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";
// import { unstable_noStore as noStore } from "next/cache";

//since, we're invalidating the data cache for the cabins page
//after an hour, the data cache for the individual cabins need
//invalidated also, to keep the data in sync as these are also
//gnerated as static pages.
// export const revalidate = 86400;

export async function generateMetadata({ params }) {
  // noStore();
  const { cabinId: id } = params;
  const { name } = await getCabin(id);

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  const { cabinId } = params;

  const cabin = await getCabin(cabinId);

  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getCabin(cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(cabinId),
  // ]);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival. {regularPrice}
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservations cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
