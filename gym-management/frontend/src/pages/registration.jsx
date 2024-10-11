import React from "react";
import Outlet from "../component/outlet";
import RegistrForm from "../component/registration/registrform";
export default function Registartionpage() {
    return(
        <div className="flex flex-col grow-[3] border-white bg-beigecustom">
                <div className=" border-white h-1/4 bg-beigecustom ml-5 mt-12 ">
                <h1>Become member !</h1>
                <h2>Register now</h2>
                </div>
                <div className=" border-white  border rounded-full   h-1/2 ml-5 mr-5">
               
                <RegistrForm  />
              </div>
        </div>
    )
}
