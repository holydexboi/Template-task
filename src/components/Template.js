import React, { useState, useEffect } from "react";
import { useGetTemplatesQuery } from "../services/template";
import Pagination from "../components/Pagination";
import paginate from "./utils/paginate";
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

  const [pageSize] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState(data);
  const [searchFilter, setSearchFilter] = useState(categoryFilter);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNextPageChange = (pageCount) => {
    if (currentPage < pageCount) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPageChange = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (selectedCategory) => {
    console.log(selectedCategory);
    setCategory(selectedCategory);
    setSearchQuery("");
  };

  useEffect(() => {
    if (!isLoading && category && category !== "All") {
      setCategoryFilter(
        data.filter((item) => item.category.includes(category))
      );
    } else if (!category || category === "All") {
      setCategoryFilter(data);
    }
  }, [data, category, isLoading]);

  useEffect(() => {
    if (!isLoading && categoryFilter && searchQuery)
      setSearchFilter(
        categoryFilter.filter((m) =>
          m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      );
    else if (!searchQuery) setSearchFilter(categoryFilter);
  }, [searchQuery, categoryFilter, isLoading]);

  const templates = paginate(searchFilter, currentPage, pageSize);

  return (
    <div className="container mx-auto pt-20">
      <form className="flex justify-between">
        <div className="flex justify-end items-center relative w-96">
          <input
            type={"search"}
            className="h-12 pl-8 border rounded w-full text-lg"
            placeholder="Search Templates"
            value={searchQuery}
            onChange={(e) => handleSearch(e.currentTarget.value)}
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
          <SelectInput
            options={categoryOption}
            label="Category"
            value={category}
            onSelectChange={(e) => handleCategoryChange(e.target.value)}
          />
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
          <p className=" font-medium text-lg text-gray-700">
            {category} Templates
          </p>
          <p className=" font-normal text-gray-400">
            {searchFilter.length} templates
          </p>
        </div>
        {isLoading && !error ? (
          <button type="button" class="bg-indigo-500 ..." disabled>
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            Processing...
          </button>
        ) : (
          <div>
            {" "}
            <div className="mt-5 grid grid-cols-3 px-4 gap-16 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded scrollbar-track-black-300 h-screen overflow-y-scroll">
              {templates.map((template) => (
                <TemplateCard templateItem={template} />
              ))}
            </div>
            <div className="m-14">
              <Pagination
                itemsCount={searchFilter?.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onNextPageChange={handleNextPageChange}
                onPreviousPageChange={handlePreviousPageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
