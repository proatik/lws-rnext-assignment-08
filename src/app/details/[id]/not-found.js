"use client";

import { useParams } from "next/navigation";

const NotFound = () => {
  const { id } = useParams();

  return (
    <div className="container px-4">
      <div className="w-full py-8 text-2xl text-center border rounded-md text-black/60 border-slate-300 bg-slate-200/20 col-span-full">
        No recipe was found for id :{" "}
        {<span className="text-sky-500">{id}</span>}.
      </div>
    </div>
  );
};

export default NotFound;
