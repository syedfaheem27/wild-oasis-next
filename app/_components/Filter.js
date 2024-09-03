"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const activeFilter = searchParams.get("capacity");

  return (
    <div className="border border-primary-200 flex ">
      <Button
        activeFilter={activeFilter}
        filter="all"
        handleFilter={handleFilter}
      >
        All cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        filter="small"
        handleFilter={handleFilter}
      >
        1&mdash;3 cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        filter="medium"
        handleFilter={handleFilter}
      >
        4&mdash;7 cabins
      </Button>
      <Button
        activeFilter={activeFilter}
        filter="large"
        handleFilter={handleFilter}
      >
        8&mdash;12 cabins
      </Button>
    </div>
  );
};

function Button({ children, activeFilter, filter, handleFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 text-primary-200 hover:bg-primary-900 ${
        filter === activeFilter ? "bg-primary-700 text-primary-100" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Filter;
