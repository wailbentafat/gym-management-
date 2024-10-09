import React from "react";

export default function Navbar({ title = "Navbar" }) {
    return (
        <div className="bg-beigecustom text-white p-4">
            <h1 className="text-lg font-bold">{title}</h1>
        </div>
    );
}
