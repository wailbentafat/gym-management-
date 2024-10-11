import React from "react";
import Outlet from "../component/outlet";
import RegistrForm from "../component/registration/registrform";
export default function Registartionpage() {
    return(
        <div className="h-full flex flex-col bg-beigecustom">
            <Outlet  className=" bg-beigecustom ">
                <div className="flex flex-col h-1/4  bg-beigecustom ml-5 mt-12">
                <h1>Become member !</h1>
                <h2>Register now</h2>
                </div>
                <div className=" bg-white  h-1/4 ml-5 mr-5">
               
                <RegistrForm  />
              </div>
            </Outlet>
        </div>
    )
}
