import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentHisto() {
    const [fetchE,updateE]=useState([
        {
            name:"Member 1",
            id:"SFM2301N1",
            plan:"1 Month - PT",
            month:"JAN",
            datep:"10-01-2023",
            amount:"1300"

        },
        {

            name:"Member 2",
            id:"SFM2301N2",
            plan:"6 Month - PT",
            month:"JAN",
            datep:"10-01-2023",
            amount:"6000"
        },
        {

            name:"Member 3",
            id:"SFM2301N3",
            plan:"1 Month - M",
            month:"JAN",
            datep:"10-01-2023",
            amount:"1200"
        },
        {

            name:"Member 4",
            id:"SFM2301N4",
            plan:"3 Month",
            month:"JAN",
            datep:"10-01-2023",
            amount:"3500"
        }
    ])
    function keyupEv(){
        var elem=document.querySelector("#inptRowFetch")
        if(elem!=null){
            
            chngsize(elem.value.length==0?1:elem.value.length);
        }
    }
    function retTabElem(){ 
        console.log(fetchE.length)
    }
    const [inptsize,chngsize]=useState(3)
    return <form className="mt-12 px-10 pt-5 pb-10 bg-white rounded-xl shadow-xl border-white border-2 flex flex-col items-stretch">
            <span className="font-poppins text-xl font-extrabold ml-1">Payment History</span>
            <div className="flex flex-row mt-10 ml-2 items-center">
                <span className="font-poppins text-sm">Show Entities</span>
                <input defaultValue="0" id="inptRowFetch" onKeyUp={keyupEv} size={inptsize} type="number" name="rowstoshow" className="bg-purple1 ml-1 p-1 text-center rounded-full"></input>

                <div className="grow"/>
                <div className="flex flex-row space-x-1">
                    <input style={{backgroundColor:"rgba(170, 164, 234, 0.55)"}} placeholder="Search" type="text" name="searchonlist" size="14" className="ml-1 p-1.5 text-white rounded-full"></input>
                    
                    <button type="button" className="">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6781 12.929C15.8884 11.2772 16.4305 9.22925 16.1959 7.19486C15.9613 5.16048 14.9673 3.2897 13.4128 1.9568C11.8583 0.6239 9.85794 -0.0728188 7.81187 0.00603073C5.76581 0.0848803 3.82496 0.933483 2.37762 2.38206C0.930277 3.83065 0.0831823 5.77238 0.00580795 7.81878C-0.0715664 9.86519 0.626485 11.8654 1.96031 13.4191C3.29413 14.9729 5.16536 15.9657 7.19963 16.1988C9.23389 16.432 11.2812 15.8884 12.9319 14.6767H12.9306C12.9681 14.7267 13.0081 14.7742 13.0531 14.8205L17.8654 19.6335C18.0998 19.868 18.4178 19.9999 18.7493 20C19.0809 20.0001 19.399 19.8685 19.6335 19.6341C19.8681 19.3997 19.9999 19.0817 20 18.7501C20.0001 18.4184 19.8685 18.1004 19.6341 17.8658L14.8218 13.0528C14.7771 13.0075 14.7291 12.9657 14.6781 12.9278V12.929ZM15.0006 8.12352C15.0006 9.02645 14.8227 9.92054 14.4773 10.7547C14.1318 11.5889 13.6254 12.3469 12.987 12.9854C12.3486 13.6239 11.5907 14.1303 10.7567 14.4759C9.92258 14.8214 9.02862 14.9992 8.12582 14.9992C7.22301 14.9992 6.32905 14.8214 5.49497 14.4759C4.66089 14.1303 3.90302 13.6239 3.26464 12.9854C2.62626 12.3469 2.11987 11.5889 1.77438 10.7547C1.4289 9.92054 1.25108 9.02645 1.25108 8.12352C1.25108 6.29997 1.97538 4.55111 3.26464 3.26166C4.55391 1.97222 6.30252 1.24781 8.12582 1.24781C9.94911 1.24781 11.6977 1.97222 12.987 3.26166C14.2763 4.55111 15.0006 6.29997 15.0006 8.12352Z" fill="#1A1363"/>
                        </svg>
                    </button>
                </div>
            </div>

            <table className="mt-5">
            <tbody>
                  <tr className="text-bluestmn text-left font-poppins font-bold text-lg">
                    <th>Member Name</th>
                    <th>Member ID</th>
                    <th>Plan</th>
                    <th>Month</th>
                    <th>Date Paid</th>
                    <th>Amount</th>
                  </tr>
                  {
                    fetchE.map((item)=>{ return <tr key={item.id} className="text-bluestmn font-poppins font-light text-base">
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>{item.plan}</td>
                        <td>{item.month}</td>
                        <td>{item.datep}</td>
                        <td>{item.amount}</td>
                      </tr>
                  })
                  }
                </tbody>
            </table> 
    </form>
}
