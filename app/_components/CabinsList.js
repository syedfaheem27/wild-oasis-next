import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";
// import { unstable_noStore as noStore } from "next/cache";

//won't work here as it can be used in page.js only
// export const revalidate = 0;

const CabinsList = async () => {
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default CabinsList;
