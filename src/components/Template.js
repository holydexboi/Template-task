import React, { useState, useEffect } from "react";
import { useGetTemplatesQuery } from "../services/template";
import Pagination from "../components/Pagination";
import paginate from "./utils/paginate";
import { RiSearchLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import TemplateCard from "./TemplateCard";
import SelectInput from "./SelectInput";
import _ from "lodash";

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
  const [sorted, setSorted] = useState(searchFilter);
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState("Default");
  const [dateOrder, setDateOrder] = useState("Default");
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
    setCategory(selectedCategory);
    setSearchQuery("");
    setOrder("Default");
    setDateOrder("Default");
    setCurrentPage(1);
  };

  const handleOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
    setDateOrder("Default");
    setCurrentPage(1);
  };

  const handleDateOrderChange = (selectedDateOrder) => {
    setDateOrder(selectedDateOrder);
    setOrder("Default");
    setCurrentPage(1);
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
    if (!isLoading && categoryFilter && searchQuery) {
      setSearchFilter(
        categoryFilter.filter((m) =>
          m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        )
      );
    } else if (!searchQuery) {
      setSearchFilter(categoryFilter);
    }
  }, [searchQuery, categoryFilter, isLoading]);

  useEffect(() => {
    if (!isLoading && order === "Default" && dateOrder === "Default") {
      setSorted(searchFilter);
    } else if (!isLoading && searchFilter) {
      if (order !== "Default" && dateOrder !== "Default") {
        const orderSort = _.orderBy(
          searchFilter,
          ["name", "created"],
          [
            order === "Ascending" ? "asc" : "desc",
            dateOrder === "Ascending" ? "asc" : "desc",
          ]
        );

        setSorted(orderSort);
      } else if (order === "Default" && dateOrder !== "Default") {
        const dateSort = _.orderBy(
          searchFilter,
          "created",
          dateOrder === "Ascending" ? "asc" : "desc"
        );

        setSorted(dateSort);
      } else if (order !== "Default" && dateOrder === "Default") {
        const orderSort = _.orderBy(
          searchFilter,
          ["name"],
          [order === "Ascending" ? "asc" : "desc"]
        );

        setSorted(orderSort);
      }
    }
  }, [searchFilter, order, categoryFilter, isLoading, dateOrder]);

  const templates = paginate(sorted, currentPage, pageSize);
  return (
    <div className="container md:mx-auto pt-10 md:pt-20">
      <form className="lg:flex justify-between">
        <div className="flex justify-end items-center relative lg:w-96 md:w-full w-full mb-5 md:mb-0">
          <input
            type={"search"}
            className="h-12 pl-8 border rounded w-full text-lg font-sans"
            placeholder="Search Templates"
            value={searchQuery}
            onChange={(e) => handleSearch(e.currentTarget.value)}
          />
          <span className="absolute mr-2 w-10">
            <RiSearchLine className="text-gray-500 text-3xl font-thin" />
          </span>
        </div>
        <div className="lg:flex lg:justify-end lg:space-x-6 space-y-3">
          <div className="md:pt-5 lg:pt-5">
            {" "}
            <p className="text-gray-400 font-normal text-base">Sort By:</p>
          </div>
          <div className="pr-1">
            <SelectInput
              options={categoryOption}
              label="Category"
              value={category}
              onSelectChange={(e) => handleCategoryChange(e.target.value)}
            />
          </div>
          <div className="pr-1">
            <SelectInput
              value={order}
              options={orderOptions}
              label="Order"
              onSelectChange={(e) => handleOrderChange(e.target.value)}
            />
          </div>
          <div>
            <SelectInput
              value={dateOrder}
              options={orderOptions}
              label="Date"
              onSelectChange={(e) => handleDateOrderChange(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className="w-full h-auto flex justify-center  md:pt-5 py-4 md:px-3 px-2 container  bg-[#FFF4EA] rounded-sm mt-20 ">
        {" "}
        <BsInfoCircle className="md:mr-7 mr-2 -mt-1 text-[#FC830A] text-4xl lg:text-4xl " />
        <p className="font-bold text-xs md:text-sm text-[#252525] md:pt-2">
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
            {searchFilter?.length} templates
          </p>
        </div>
        {error ? (
          <p className=" justify-center text-center text-lg text-red-400 font-bold align-middle">
            {error.error}
          </p>
        ) : isLoading ? (
          <div class="flex justify-center items-center">
            {" "}
            <div
              class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent"
            ></div>
            <span>
              <p class="pt-2 text-xl pl-2 font-bold">Loading</p>
            </span>
          </div>
        ) : (
          <div>
            {" "}
            <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 md:gap-8 lg:gap-16 space-y-5 scrollbar-thin scrollbar-thumb-black scrollbar-thumb-rounded scrollbar-track-black-300 h-screen overflow-y-scroll">
              {templates.map((template) => (
                <TemplateCard templateItem={template} />
              ))}
            </div>
            <div className="mt-14 ">
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
