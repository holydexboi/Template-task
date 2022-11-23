import React from "react";

export default function SelectInput({ options, value, label, onSelectChange}) {
  return (
    <>
      <div className="relative">
        <select value={value} onChange={onSelectChange} className="border rounded text-gray-600 font-medium h-12 w-56">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <label
          htmlFor="small_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
        >
          {label}
        </label>
      </div>
    </>
  );
}
