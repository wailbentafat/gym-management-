import React from "react";
import CustomLink from "./SideCmp/CustomLink.jsx";

export default function Sidebar() {
    return (
        <div className="relative w-1/4 h-full bg-blueside text-white" id="sidebar">
            <ul className="flex flex-col items-end space-y-5">
                <CustomLink text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink text="Admin profile" linkto="/" iconpath="admin"/>
                <CustomLink text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink text="dashboard" linkto="/" iconpath="dashboard"/>
            </ul>
        </div>
    );
}