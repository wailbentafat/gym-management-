import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Plan() {
  const classData = [
    {
      name: "Yoga Class",
      price: "20.00",
      categories: "Fitness",
      timeinweek: "3",
    },
    {
      name: "Pilates Class",
      price: "25.00",
      categories: "Wellness",
      timeinweek: "2",
    },
    {
      name: "Dance Class",
      price: "30.00",
      categories: "Art",
      timeinweek: "4",
    },
    {
      name: "Swimming Lessons",
      price: "15.00",
      categories: "Fitness",
      timeinweek: "1",
    },
    {
      name: "Cooking Workshop",
      price: "50.00",
      categories: "Culinary",
      timeinweek: "1",
    },
  ];

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(classData[index]);
  };

  const handleSave = () => {
    // Logic for saving the edited item
    console.log("Saved:", formData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setFormData({});
  };

  const handleSearch = (searchTerm) => {
    // Logic for searching entities
    console.log(`Search term: ${searchTerm}`);
  };

  const handleShowEntities = (num) => {
    // Logic for showing entities
    console.log(`Show ${num} entities`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="mt-12 px-10 mr-8 pt-5 pb-10 bg-zr9 grow shadow-x rounded-2xl shadow-xl mb-5 border-zr9 border-2 flex flex-col items-stretch">
      <div className="flex flex-row justify-between">
        <div className="mb-5">
          <label className="text-l text-opacity-15 text-white mr-3">show entities</label>
          <input
            type="number"
            className="rounded-2xl h-9 w-13 bg-zr91 p-3"
            onChange={(e) => handleShowEntities(e.target.value)}
          />
        </div>
        <div className="flex">
          <input
            className="bg-zr91 text-center text-sfr rounded-2xl h-10 w-50"
            placeholder="search"
            type="text"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <CiSearch className="text-4xl flex ml-2 text-white" />
        </div>
      </div>

      <table className="mt-5 w-full">
        <thead>
          <tr className="text-sfr text-left font-poppins font-bold text-lg">
            <th>Name</th>
            <th>Price</th>
            <th>Categories</th>
            <th>Time in Week</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((item, index) => (
            <tr key={index} className="text-bluestmn text-left rounded-2xl font-poppins font-light text-base">
              {editingIndex === index ? (
                <>
                  <td className="px-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="px-4">
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="px-4">
                    <input
                      type="text"
                      name="categories"
                      value={formData.categories}
                      onChange={handleChange}
                      className="border rounded p-1"
                    />
                  </td>
                  <td className="px-4">
                    <input
                      type="text"
                      name="timeinweek"
                      value={formData.timeinweek}
                      onChange={handleChange}
                      className="border rounded p-1"
                    />
                  </td>
                  <td>
                    <button
                      className="bg-green-500 text-white rounded-full px-4 py-1 font-bold"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-red-500 text-white rounded-full px-4 py-1 font-bold ml-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-4">{item.name}</td>
                  <td className="px-4">${item.price}</td>
                  <td className="px-4">{item.categories}</td>
                  <td className="px-4">{item.timeinweek}</td>
                  <td>
                    <button
                      className="bg-white rounded-full shadow-lg ml-9 px-4 py-1 font-bold text-m"
                      onClick={() => handleEdit(index)}
                    >
                      edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
