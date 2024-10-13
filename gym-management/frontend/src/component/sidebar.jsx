import React, { useEffect } from "react";
import CustomLink from "./SideCmp/CustomLink.jsx";
import { useState } from "react";

export default function Sidebar() {
    const utlprt=window.location.pathname
    
    const [activelnk,setactivelnk]=useState(
        {
          link1:true,
          link2:false,
          link3:false,
          link4:false,
          link5:false,
          link6:false,
          link7:false,
          link8:false,
        }
      )
      function linkClickEv(){
        var urlpath=window.location.pathname
        switch (urlpath) {
            case "/admin":
                setactivelnk(
                    {
                        link1:false,
                        link2:true,
                        link3:false,
                        link4:false,
                        link5:false,
                        link6:false,
                        link7:false,
                        link8:false,
                      }
                )
                break;
            case "/reg":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:true,
                        link4:false,
                        link5:false,
                        link6:false,
                        link7:false,
                        link8:false,
                      }
                )
                
                break;
            case "/plan":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:false,
                        link4:true,
                        link5:false,
                        link6:false,
                        link7:false,
                        link8:false,
                      }
                )
                
                break;
            case "/payment":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:false,
                        link4:false,
                        link5:true,
                        link6:false,
                        link7:false,
                        link8:false,
                      }
                )
                
                break;
            case "/inv":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:false,
                        link4:false,
                        link5:false,
                        link6:true,
                        link7:false,
                        link8:false,
                      }
                )
                
                break;
            case "/members":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:false,
                        link4:false,
                        link5:false,
                        link6:false,
                        link7:true,
                        link8:false,
                      }
                )
                
                break;
            case "/report":
                setactivelnk(
                    {
                        link1:false,
                        link2:false,
                        link3:false,
                        link4:false,
                        link5:false,
                        link6:false,
                        link7:false,
                        link8:true,
                      }
                )
                
                break;
        
            default:
                setactivelnk(
                    {
                        link1:true,
                        link2:false,
                        link3:false,
                        link4:false,
                        link5:false,
                        link6:false,
                        link7:false,
                        link8:false,
                      }
                )
                break;
        }
    }
    useEffect(() => 
        {
            linkClickEv();
        },[utlprt]);
    return (
        <div className="relative overflow-scroll w-1/4 min-h-full grow bg-blueside text-white" id="sidebar">
            <div className="flex flex-col items-center mt-12">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_246_161)">
                <path d="M35.0625 19.125C35.0625 21.6611 34.055 24.0934 32.2617 25.8867C30.4684 27.68 28.0361 28.6875 25.5 28.6875C22.9639 28.6875 20.5316 27.68 18.7383 25.8867C16.945 24.0934 15.9375 21.6611 15.9375 19.125C15.9375 16.5889 16.945 14.1566 18.7383 12.3633C20.5316 10.57 22.9639 9.5625 25.5 9.5625C28.0361 9.5625 30.4684 10.57 32.2617 12.3633C34.055 14.1566 35.0625 16.5889 35.0625 19.125Z" fill="#FFFBD8"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 25.5C0 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 0 25.5 0C32.263 0 38.749 2.6866 43.5312 7.46878C48.3134 12.251 51 18.737 51 25.5C51 32.263 48.3134 38.749 43.5312 43.5312C38.749 48.3134 32.263 51 25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 0 32.263 0 25.5ZM25.5 3.1875C21.2982 3.18772 17.1818 4.37441 13.6247 6.61096C10.0675 8.84752 7.21421 12.043 5.39314 15.8297C3.57206 19.6164 2.85723 23.8404 3.33093 28.0154C3.80463 32.1905 5.44761 36.1469 8.07075 39.4294C10.3339 35.7829 15.3159 31.875 25.5 31.875C35.6841 31.875 40.6629 35.7797 42.9293 39.4294C45.5524 36.1469 47.1954 32.1905 47.6691 28.0154C48.1428 23.8404 47.4279 19.6164 45.6069 15.8297C43.7858 12.043 40.9325 8.84752 37.3753 6.61096C33.8182 4.37441 29.7018 3.18772 25.5 3.1875Z" fill="#FFFBD8"/>
                </g>
                <defs>
                <clipPath id="clip0_246_161">
                <rect width="51" height="51" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <span className="text-center mt-3">
                Administrator profile
            </span>

            </div>
            <ul className="my-8 pr-1 flex flex-col items-end space-y-5">
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link1} text="Dashboard" linkto="/" iconpath="dashboard"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link2} text="Admin profile" linkto="/admin" iconpath="admin"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link3} text="Registration" linkto="/reg" iconpath="registration"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link4} text="Plan" linkto="/plan" iconpath="plan"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link5} text="Payment" linkto="/payment" iconpath="payment"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link6} text="Inventory" linkto="/inv" iconpath="inventory"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link7} text="Members" linkto="/members" iconpath="members"/></div>
                <div className="items-center w-10/12" onClick={linkClickEv}><CustomLink isActive={activelnk.link8} text="Report" linkto="/report" iconpath="report"/></div>
            </ul>
        </div>
    );
    
}
