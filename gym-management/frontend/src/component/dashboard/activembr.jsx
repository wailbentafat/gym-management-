import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Actvmm() {
  const [query, setquery] = useState("");
  const member = [
    { id: 1, name: "Wail", etat: true },
    { id: 2, name: "hmd", etat: false },
    { id: 3, name: "Wail", etat: true },
    { id: 4, name: "hmd", etat: false },
  ];

  const handlesearch = (e) => {
    setquery(e.target.value);
  };

  return (
    <div className="w-4/6 shadow-xl border-purple1 rounded-lg flex flex-col gap-4 bg-purple1 grow">
      <div className="flex flex-row justify-between">
        <div className="flex mt-3 mb-3 ml-3 mr-3 flex-row gap-2">
          <input
            type="text"
            className="border-2 w-3/4 text-white h-7 rounded-md shadow-xl border-bluestmn bg-blueside p-2"
            placeholder="Search here"
            onChange={handlesearch}
          />
          <CiSearch className="text-2xl font-extrabold text-white" />
        </div>
        <div className="mr-3 mt-3 text-white font-bold">sort here</div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-purple-800">
            <th className="font-bold px-4 py-2 text-left text-white">ID</th>
            <th className="font-bold px-4 py-2 text-left text-white">Name</th>
            <th className="font-bold px-4 py-2 text-left text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {member.map((member) => (
            <tr key={member.id} className="bg-purple-600">
              <td className="font-bold px-4 py-2 text-white">{member.id}</td>
              <td className="font-bold px-4 py-2 text-white">{member.name}</td>
              <td className="font-bold px-4 py-2 ">
                {member.etat ? (
                  <IoIosCheckmarkCircleOutline className="text-lime-500 text-2xl" />
                ) : (
                  <IoIosCloseCircleOutline className="text-orange-500 text-2xl" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
