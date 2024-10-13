import React from "react";
import { Link } from "react-router-dom";
import Filter from "../component/report/Filter";
import PaymentHisto from "../component/report/PaymentHisto";

export default function SReport() {
    return (
        <div className="grow-[3] px-10 py-5 bg-beigecustom">
            <div className="mb-5">
                <span className="text-4xl font-bold font-poppins text-bluestmn">Sales Report</span>
            </div>
            <Filter/>
            <PaymentHisto/>
        </div>
    );
}
