import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";

const CabinsList = async () => {
  const cabins = await getCabins();

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
