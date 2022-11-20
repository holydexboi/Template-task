import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";

export default function Template() {
  return (
    <div className="container mx-auto pt-20">
      <form className="flex justify-between">
        <div className="flex justify-end items-center relative w-96">
          <input
            type={"search"}
            className="h-12 pl-8 border rounded w-full text-lg"
            placeholder="Search Templates"
          />
          <span className="absolute mr-2 w-10">
            <RiSearchLine className="text-gray-500 text-3xl font-thin" />
          </span>
        </div>
        <div className="flex justify-start space-x-6">
          <div className="pt-3">
            {" "}
            <p className="text-gray-400 font-normal text-base">Sort By:</p>
          </div>
          <div className="relative">
            <select className="border rounded text-gray-600 font-medium h-12 w-56">
              <option value={"all"}>All</option>
              <option value={"education"}>Education</option>
              <option value={"agriculture"}>Agriculture</option>
              <option value={"health"}>Health</option>
            </select>
            <label
              for="small_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Category
            </label>
          </div>
          <div className="relative">
            <select className="border rounded text-gray-600 font-medium h-12 w-56">
              <option value={"default"}>Default</option>
              <option value={"descending"}>Descending</option>
              <option value={"Ascending"}>Ascending</option>
            </select>
            <label
              for="small_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Order
            </label>
          </div>
          <div className="relative">
            <select className="border rounded text-gray-600 font-medium h-12 w-56">
              <option value={"default"}>Default</option>
              <option value={"descending"}>Descending</option>
              <option value={"Ascending"}>Ascending</option>
            </select>
            <label
              for="small_outlined"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
            >
              Date
            </label>
          </div>
        </div>
      </form>
      <div className="w-full h-16 flex justify-center text-center pt-7 bg-[#FFF4EA] rounded-sm mt-20 ">
        {" "}
        <BsInfoCircle
          style={{ fontSize: "1.7rem" }}
          className="mr-7 -mt-1 text-[#FC830A]"
        />
        <p className="font-bold text-sm text-[#252525]">
          Tada! Get started with a free template. Can't find what you are
          looking for? Search from the 1000+ available templates
        </p>
      </div>
      <div className="mt-14">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">All Templates</p>
          <p className=" font-normal text-gray-400">2000 templates</p>
        </div>
        <div>
          <div className=" w-16 h-40">

          </div>
        </div>
      </div>
    </div>
  );
}
