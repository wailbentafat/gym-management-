import React from "react";
import Plan from "../component/plans/plans";
import Addplan from "../component/plans/addplan";

export default function Planpage(){
    return(
        <div className="bg-beigecustom ">
            <button>add plan</button>
            <Addplan/>
            <Plan/>
        </div>

    )
}