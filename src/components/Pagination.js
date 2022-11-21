import React from 'react'

export default function Pagination() {
  return (
    <div className="flex justify-between">
      <button className=" text-2xl font-medium">Previous</button>
      <div className="flex">
        <button
          disabled
          className=" border-2 rounded-md py-1 px-4 text-xl  text-[#3F3F3F] font-bold border-black"
        >
          1
        </button>
        <p className="rounded-md py-2 pl-4 pr-1 text-xl text-[#3F3F3F] font-bold">
          of
        </p>
        <button className="rounded-md py-2 text-xl text-[#3F3F3F] font-bold">
          14
        </button>
      </div>
      <button className=" text-2xl font-medium">Next</button>
    </div>
  );
}
