import React from 'react'
import _ from 'lodash'

export default function Pagination({itemsCount, currentPage, pageSize, onNextPageChange, onPreviousPageChange}) {

  const pageCount = Math.ceil(itemsCount/pageSize)

  if(pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  return (
    <div className="flex justify-between">
      <button onClick={()=>onPreviousPageChange()} className=" text-2xl font-medium">Previous</button>
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
      <button onClick={() => onNextPageChange()} className=" text-2xl font-medium">Next</button>
    </div>
  );
}
