import React from "react";

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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Class Plans</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Categories</th>
            <th className="border border-gray-300 p-2">Time in Week</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{item.name}</td>
              <td className="border border-gray-300 p-2">${item.price}</td>
              <td className="border border-gray-300 p-2">{item.categories}</td>
              <td className="border border-gray-300 p-2">{item.timeinweek} times</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
