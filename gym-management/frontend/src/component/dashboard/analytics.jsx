import React from "react";

export default function Analytics() {
  const data = {
    member_today: 10,
    today_income: 100,
  };

  return (
    <div className="flex bg-white text_black  border-white w-3/4 ml-5 mr-6 h-full rounded-lg shadow-xl flex-col">
      <div className="place-items-start ">
        <h1 className="text-l  font-bold  font-poppins p-1">Today Analytics:</h1>
      </div>
      <div className="place-items-center">
        <h1 className="text-m font-semibold font-poppins p-3">Total Members: {data.member_today}</h1>
        <h1 className="text-m font-semibold font-poppins p-3">Total Income: ${data.today_income}</h1>
      </div>
    </div>
  );
}
