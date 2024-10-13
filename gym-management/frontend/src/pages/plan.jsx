import React from "react";
import Plan from "../component/plans/plans";
import Addplan from "../component/plans/addplan";

export default function Planpage(){
    return(
        <div className=" grow bg-beigecustom ">
            <button className="bg-white rounded-full shadow-lg ml-9 px-7 py-1 font-bold  text-xl mb-5">add plan</button>
            <Addplan/>
            <div className="mt-4 ml-9">
            <Plan/>
            </div>
        </div>

    )
}