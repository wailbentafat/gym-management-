import React from "react";
import Outlet from "../component/outlet";
import RegistrForm from "../component/registration/registrform";
export default function Registartionpage() {
    return(
        <div className="h-full flex flex-col   border-white    bg-beigecustom">
                <div className=" border-white h-1/6 bg-beigecustom ml-5 mt-20 ">
                <h1 className="text-4xl font-bold text-yellow2 ">Become a  Member !</h1>
                <h1 className=" mt-2 text-5xl font-bold text-blueside ">Register</h1>
                </div>
                <div className=" rounded-full   h-3/4 ml-5 mr-10">
               
                <RegistrForm  />
              </div>
        </div>
    )
}
