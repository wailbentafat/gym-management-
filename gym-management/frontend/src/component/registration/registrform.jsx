import React, { useState } from "react";

export default function RegistrForm() {
  const [information, setInformation] = useState({
    name: "",
    phonenumber: "",
    joindate: "",
    plan: "",
  });
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInformation((previnfo) => ({
      ...previnfo,
      [name]: value,
    }));
  }

  function handlePlanSelect(option) {
    setInformation((previnfo) => ({
      ...previnfo,
      plan: option.value,
    }));
    setDropdownOpen(false);
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(information);
  }

  const options = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
  ];

  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col bg-white rounded-lg shadow-xl border-white border-2 w-full h-full grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 p-4"
    >
      <div className="mt-7">
        <label className="text-xl font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={information.name}
          onChange={handleChange}
          className="mt-2 text-xl font-semibold w-full p-2 bg-beigecustom rounded-full"
        />
      </div>
      <div className="mt-7">
        <label className="text-xl font-semibold">Phone Number</label>
        <input
          type="number"
          name="phonenumber"
          value={information.phonenumber}
          onChange={handleChange}
          className="mt-2 text-xl font-semibold w-full p-2 bg-beigecustom rounded-full"
        />
      </div>
      <div className="mt-7">
        <label className="text-xl font-semibold">Join Date</label>
        <input
          type="date"
          name="joindate"
          value={information.joindate}
          onChange={handleChange}
          className="mt-2 text-xl font-semibold w-full p-2 bg-beigecustom rounded-full"
        />
      </div>
      <div>
        <label className="text-xl font-semibold">Plan</label>
        <div className="relative mt-7">
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
      <div></div>
      <div className="flex align-items-right justify-start mt-7">
        <button type="submit" className="bg-blueside  text-white font-bold  rounded-full h-10 w-60 mr-2">Avail Membership</button>
        <button type="reset" className="border-blueside  border text-blueside font-bold w-40 h-10 rounded-3xl border-2 bg-white ">Reset</button>
      </div>
    </form>
  );
}
