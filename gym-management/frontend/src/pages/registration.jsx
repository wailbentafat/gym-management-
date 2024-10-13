import React from "react";
import Outlet from "../component/outlet";
import RegistrForm from "../component/registration/registrform";
export default function Registartionpage() {
    return(
        <div className="h-full flex flex-col grow[3]  border-white bg-beigecustom">
                <div className=" border-white  bg-beigecustom ml-5 mt-6  ">
                <h1 className="text-4xl text-yellow2  font-extrabold font-poppins">Become Member !</h1>
                <h2 className=" text-5xl text-blueside font-bold  font-monument">Register</h2>
                </div>
                <div className=" rounded-full mt-4   h-3/4 ml-5 mr-10 ">
               
                <RegistrForm  />
              </div>
        </div>
    )
}
