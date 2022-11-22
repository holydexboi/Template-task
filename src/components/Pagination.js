import React from "react";

export default function Pagination({
  itemsCount,
  currentPage,
  pageSize,
  onNextPageChange,
  onPreviousPageChange,
}) {

  if(itemsCount === 0) return null
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  return (
    <div className="flex justify-between">
      <button
        onClick={() => onPreviousPageChange()}
        className=" text-2xl font-medium"
      >
        {currentPage > 1 ? <span className="mr-3 text-3xl">{"<"}</span> : ""}Previous
      </button>
      <div className="flex">
        <button
          disabled
          className=" border-2 rounded-md py-1 px-4 text-xl  text-[#3F3F3F] font-bold border-black"
        >
          {currentPage}
        </button>
        <p className="rounded-md py-2 pl-4 pr-1 text-xl text-[#3F3F3F] font-bold">
          of
        </p>
        <button className="rounded-md py-2 text-xl text-[#3F3F3F] font-bold">
          {pageCount}
        </button>
      </div>
      <button
        onClick={() => onNextPageChange()}
        className=" text-2xl font-medium"
      >
        Next{currentPage < pageCount ? <span className="ml-3 text-3xl">{">"}</span> : ""}
      </button>
    </div>
  );
}
