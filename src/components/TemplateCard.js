import React from "react";

function TemplateCard({templateItem}) {
  return (
    <div className="rounded-b-lg shadow-xl">
      <div className=" h-60 pt-6 pl-6 pr-11">
        <p className=" text-3xl text-[#333447] font-semibold">
          {templateItem.name}
        </p>
        <p className="mt-4 font-normal text-lg leading-5 pr-6">
          {templateItem.description}
        </p>
      </div>
      <div className="h-11 text-[#08bd37] font-bold pl-6 pr-11 py-2 bg-gray-100">
        <a href={templateItem.link} className="">Use Template</a>
      </div>
    </div>
  );
}

export default TemplateCard;
