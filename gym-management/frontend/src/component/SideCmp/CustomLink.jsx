import React from "react";
import { BrowserRouter,Link } from "react-router-dom";
import AllSvg from "./AllSvg";

function returnIsActiveOrNot(props){
    if(props.isActive=="false"){
        return <>

            <Link to={props.linkto} className="rounded-l-lg px-5 py-3 bg-blueside text-white flex flex-row items-center w-3/4">
                        <AllSvg color={props.isActive=="false"?"white":"#1a1363"} svg={props.iconpath}/>
                        <span className="ml-3.5">{props.text}</span>
            </Link>
        </>
    }else{
        return <>
        
        <Link to={props.linkto} className="rounded-l-lg px-5 py-3 bg-activebutton text-blueside flex flex-row items-center w-3/4">
                        <AllSvg color={props.isActive=="false"?"white":"#1a1363"} svg={props.iconpath}/>
                        <span className="ml-3.5">{props.text}</span>
            </Link>
        </>
    }
}
export default function CustomLink(props) {
    return (
        <>
        <BrowserRouter>
        {returnIsActiveOrNot(props)}

        </BrowserRouter>
        </>);
}