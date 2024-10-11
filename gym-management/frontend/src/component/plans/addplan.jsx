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
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <div>
        <label className="font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={inf.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="font-semibold">Price</label>
        <input
          type="text"
          name="price"
          value={inf.price}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="font-semibold">Categories</label>
        <input
          type="text"
          name="categories"
          value={inf.categories}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div>
        <label className="font-semibold">Time in Week</label>
        <input
          type="text"
          name="timeinweek"
          value={inf.timeinweek}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Plan
      </button>
    </form>
  );
}
