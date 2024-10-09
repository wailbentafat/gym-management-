import React from "react";
import Link from "react-router-dom"

export default function CustomLink(text,linkto,iconpath,isActive) {
    return (
        <div>
            <Link><img src={{iconpath}}>{{text}}</img></Link>
        </div>
    );
}