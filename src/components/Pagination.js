import React from "react";

export default function Pagination({
  itemsCount,
  currentPage,
  pageSize,
  onNextPageChange,
  onPreviousPageChange,
}) {
  
  if (!itemsCount) return null;
  const pageCount = Math.ceil(itemsCount / pageSize);

  if (pageCount === 1) return null;

  return (
    <div className="flex justify-between pb-5">
      <button
        onClick={() => onPreviousPageChange()}
        className="text-md md:text-2xl font-medium"
      >
        {currentPage > 1 ? <span className="mr-3 text-md md:text-3xl">{"<"}</span> : ""}
        Previous
      </button>
      <div className="flex">
        <button
          disabled
          className=" border-2 rounded-md md:py-1 px-2 md:px-4 text-md md:text-xl  text-[#3F3F3F] font-bold border-black"
        >
          {currentPage}
        </button>
        <p className="rounded-md py-2 pl-4 pr-1 text-xl text-[#3F3F3F] font-bold">
          of
        </p>
        <button className="rounded-md py-2 text-md md:text-xl text-[#3F3F3F] font-bold">
          {pageCount}
        </button>
      </div>
      <button
        onClick={() => onNextPageChange(pageCount)}
        className="text-md md:text-2xl font-medium"
      >
        Next
        {currentPage < pageCount ? (
          <span className="ml-3 text-3xl">{">"}</span>
        ) : (
          ""
        )}
      </button>
    </div>
  );
}
