import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Filter() {
    const[resultCount,Rechange]=useState(0)
    return <form className="space-x-8 px-10 pt-5 pb-10 bg-white rounded-xl shadow-xl border-white border-2 flex flex-row items-stretch">
        <div className="flex flex-col grow">
            <span className="font-poppins text-xl font-bold ml-1">From Date</span>
            <input type="date" name="fromdate" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>

        </div>
        <div className="flex flex-col grow">
            <span className="font-poppins text-xl font-bold ml-1">To Date</span>
            <input type="date" name="todate" className="mt-2 font-semibold p-2 bg-beigecustom rounded-full"></input>

        </div>
        <div className="flex flex-col grow">
        <span className="font-poppins text-xl font-bold ml-1">Total</span>
        <div className="grow"/>
        <span className="font-poppins text-xl font-bold ml-1">{resultCount}</span>
        <div className="grow"/>
        </div>
    </form>
}
