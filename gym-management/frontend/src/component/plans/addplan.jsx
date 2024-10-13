import React, { useState } from "react";

export default function AddPlan() {
  const [inf, setInf] = useState({
    name: "",
    price: "",
    categories: "",
    timeinweek: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInf((prevInf) => ({
      ...prevInf,
      [name]: value,
    }));
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(inf);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="   bg-blueside border-spacing-6 border rounded-2xl ml-10 mr-10 md-4 shadow-xl space-y-4"
    >
      <div className="grid sm:  p-4 grid-cols-2 grid-rows-2  gap-y-4 gap-10">
        <div className=" flex-row   ">
          <label className="font-bold text-white mb-4 text-xl">
            {" "}
            Plan Name
          </label>
          <input
            type="text"
            name="name"
            value={inf.name}
            onChange={handleChange}
            className="border p-2 mt-3 rounded-xl w-full text-white font-bold "
            required
          />
        </div>
        <div className="">
          <label className="font-bold mt-3 text-white mb-4 text-xl">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={inf.price}
            onChange={handleChange}
            className="border p-2 mt-3 rounded-xl w-full"
            required
          />
        </div>

        <div className="">
          <label className="font-bold  text-white mb-4 text-xl">
            Categories
          </label>
          <input
            type="text"
            name="categories"
            value={inf.categories}
            onChange={handleChange}
            className="border p-2 mt-3 rounded-2xl w-full"
            required
          />
        </div>
        <div>
          <label className="font-bold mt-4 text-white mb-4 text-xl">
            Time in Week
          </label>
          <input
            type="text"
            name="timeinweek"
            value={inf.timeinweek}
            onChange={handleChange}
            className="border  mt-3 p-2 rounded-2xl w-full"
            required
          />
        </div>
      
        </div>
      <div className="bg-blue-500 text-white p-5 gap-4 mb-5   flex  w-full justify-end ">
       
        <button className=" px-4 py-2 bg-sfr2 text-blueside  font-bold rounded-3xl ">cancel</button>
        <button type="submit" className="  bg-white px-9 py-2 text-bluestmn font-semibold rounded-3xl ">Save</button>
      </div>
      
      
    </form>
  );
}
