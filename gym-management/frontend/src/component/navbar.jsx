import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title = "Navbar" }) {
    return (
        <div className=" flex flex-row basis-0" style={{backgroundColor: "#ECE9E9"}}>
            <div className="flex w-full flex-row items-center">
                <img className="ml-5 h-[126px]" src="/logo.png"/>
                <span className="ml-3 font-monument text-bluestmn">Satamina<br/>Fitness</span>
                <div className="grow" />
                <Link to="/"><span className="mr-5 font-monument text-bluestmn">Contact Us</span></Link>

            </div>

        </div>
    );
}
