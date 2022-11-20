import React from "react";
import { useGetTemplatesQuery } from "../services/template";
import { RiSearchLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import TemplateCard from "./TemplateCard";
import SelectInput from "./SelectInput";

const categoryOption = [
  { label: "All", value: "All" },
  { label: "Education", value: "Education" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Health", value: "Health" },
];

const orderOptions = [
  { label: "Default", value: "Default" },
  { label: "Ascending", value: "Ascending" },
  { label: "Descending", value: "Descending" },
];

export default function Template() {
  const { data, error, isLoading } = useGetTemplatesQuery();
  console.log(data);
  console.log(error);
  console.log(isLoading);

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
          <SelectInput options={categoryOption} label="Category" />
          <SelectInput options={orderOptions} label="Order" />
          <SelectInput options={orderOptions} label="Date" />
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
          <p className=" font-medium text-lg text-gray-700">All Templates</p>
          <p className=" font-normal text-gray-400">2000 templates</p>
        </div>
        <div className="mt-5 grid grid-cols-3 px-4 gap-16 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded scrollbar-track-black-300 h-screen overflow-y-scroll">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>

        <div className="flex justify-between px-20 my-20">
          <p className="font-semibold">Previous</p>
          <div className="font-semibold text-lg"><span className=" border rounded-md border-spacing-2 border-gray-600 p-2">1</span> <span>{' of '}</span><span>14</span></div>
          <p className="font-semibold">Next</p>
        </div>
      </div>
    </div>
  );
}
