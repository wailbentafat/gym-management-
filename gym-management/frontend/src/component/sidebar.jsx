import React from "react";
import CustomLink from "./SideCmp/CustomLink.jsx";

export default function Sidebar() {
    return (
        <div className="relative w-1/4 h-full bg-blueside text-white" id="sidebar">
            <ul className="pr-1 flex flex-col items-end space-y-5">
                <CustomLink isActive="false" text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink isActive="false" text="Admin profile" linkto="/" iconpath="admin"/>
                <CustomLink isActive="false" text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink isActive="false" text="dashboard" linkto="/" iconpath="dashboard"/>
                <CustomLink isActive="true" text="dashboard" linkto="/" iconpath="dashboard"/>
            </ul>
        </div>
    );
}