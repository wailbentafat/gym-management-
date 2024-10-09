import React from "react";

export default function Navbar({ title = "Navbar" }) {
    return (
        <div style={{backgroundColor: "#ECE9E9"}}>
            <h1 className="text-lg font-bold">{title}</h1>
        </div>
    );
}
