import React, { useState } from "react";

export default function PaymentForm() {
  const [information, setInformation] = useState({
  });

  return <form
    
      className="flex flex-col mx-4 bg-white rounded-lg shadow-xl border-white border-2"
    >
        <div className="flex flex-row space-x-5 pt-10 px-5">

            <div className="flex flex-col grow-[2000]">
                    <span className="font-poppins text-xl font-bold ml-1">Member ID</span>
                    <input type="text" name="todate" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>

            </div>

            <div className="flex flex-col grow">
                <span className="font-poppins text-xl font-bold ml-1">Plan</span>
                <input type="text" name="todate" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>
            </div>

            <div className="flex flex-col grow">
                <span className="font-poppins text-xl font-bold ml-1">Price</span>
                <input type="text" name="todate" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>
            </div>

        </div>
        <div className="flex flex-row space-x-5 px-5 pb-10 mt-10">

            <div className="flex flex-col grow">
                <span className="font-poppins text-xl font-bold ml-1">Date of Join</span>
                <input type="date" name="datejoin" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>
            </div>
            <div className="grow-[2]"/>
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
              className="border-blueside text-blueside font-bold w-20 h-10 rounded-3xl border-2 "
            >
              Cancel
            </button>
        </div>
    </form>
  
}
