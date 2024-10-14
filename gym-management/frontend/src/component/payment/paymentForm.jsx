import React, { useState } from "react";

export default function PaymentForm() {
  const [information, setInformation] = useState({
    memberId: '',
    plan: '',
    dateJoin: ''
  });
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { label: "Basic Plan", value: "basic" },
    { label: "Premium Plan", value: "premium" },
    { label: "Pro Plan", value: "pro" }
  ];

  const handlePlanSelect = (option) => {
    setInformation({ ...information, plan: option.label });
    setDropdownOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  return (
    <form className="flex flex-col mx-4 bg-white rounded-lg shadow-xl border-white border-2">
      <div className="flex flex-row space-x-5 pt-10 px-5">
        <div className="flex flex-col grow-[2]">
          <span className="font-poppins text-xl font-bold ml-1">Member ID</span>
          <input 
            type="text" 
            name="memberId" 
            value={information.memberId} 
            onChange={handleInputChange}
            className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"
          />
        </div>

        <div className="flex flex-col grow-[2]">
        <label className="text-xl font-semibold">Plan</label>

          <div className="relative">

            <input
              type="text"
              name="plan"
              value={information.plan}
              readOnly
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="mt-2 text-xl font-semibold w-full p-2 bg-beigecustom rounded-full cursor-pointer"
              placeholder="Select a plan"
            />
            {isDropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-md w-full mt-1">
                {options.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handlePlanSelect(option)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-5 px-5 pb-10 mt-10">
        <div className="flex flex-col grow">
          <span className="font-poppins text-xl font-bold ml-1">Date of Join</span>
          <input 
            type="date" 
            name="dateJoin" 
            value={information.dateJoin} 
            onChange={handleInputChange}
            className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"
          />
        </div>
      </div>
      
      <div className="flex align-items-right justify-end px-5 pb-5">
        <button 
          type="button" 
          className="bg-blueside text-white font-bold rounded-full h-10 w-20 mr-2 hover:bg-blue-700 transition duration-300"
        >
          Save
        </button>
        <button 
          type="button" 
          className="border-blueside text-blueside font-bold w-20 h-10 rounded-3xl border-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
