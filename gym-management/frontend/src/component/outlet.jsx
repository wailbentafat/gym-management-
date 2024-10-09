import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Outlet() {
    return(
        <div className="h-full flex flex-row">
            <Sidebar/>

            <div className="h-full flex flex-col w-full">
                <Navbar/>
                <BrowserRouter>

                  <Routes>
                    <Route path="/" element={<></>}></Route>
                    <Route path="test" element={<>test</>} />
                  </Routes>
                </BrowserRouter>
            </div>
                
        </div>
    )
}