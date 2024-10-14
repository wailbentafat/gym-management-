import React from "react";
import { Link } from "react-router-dom";
import PaymentForm from "../component/payment/paymentForm";

export default function Payment() {
    return (
        <div className="grow-[3] px-1 py-2 bg-beigecustom min-h-fit">
            <div className=" border-white  bg-beigecustom ml-5 mt-6  ">
                <h1 className="text-4xl text-yellow2  font-extrabold font-poppins">Point of Sale</h1>
                <h2 className=" text-5xl text-blueside font-bold  font-monument">Renew</h2>
            </div>
            <PaymentForm/>
        </div>
    );
}
