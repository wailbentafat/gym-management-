import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
import AllSvg from "./AllSvg";
export default function CustomLink(props) {
    return (
        <>
        <BrowserRouter>
            <Link to={props.linkto} className="flex flex-row items-center w-3/4">
                <AllSvg svg={props.iconpath}/>
                <span className="ml-3.5">{props.text}</span>
            </Link>

        </BrowserRouter>
        </>);
}