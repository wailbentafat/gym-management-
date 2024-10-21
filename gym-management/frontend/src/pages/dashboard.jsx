import React from "react";
import Actvmm from "../component/dashboard/activembr";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] h-full bg-beigecustom">
      {/* Left side with grid rows */}
      <div className="flex flex-col">
        <div>Heyy</div>

        <div className="grid grid-cols-[1fr_1fr] gap-4 mt-4">
          <div>Heyyyy</div>
          <div>Heyy</div>
        </div>

        {/* Active Members Section */}
        <div className="border-white rounded-lg bg-beigecustom ml-5 mt-6 mb-5">
          <h1 className="text-xl font-extrabold font-poppins mb-3">Active Members</h1>
          <Actvmm />
        </div>
      </div>

      {/* Right side content */}
      <div className="bg-sfr2 flex flex-col">
        <div> heyy</div>
        <div>
          Heyy
        </div>
      </div>
    </div>
  );
}
