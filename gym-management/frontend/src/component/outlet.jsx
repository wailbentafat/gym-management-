import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Outlet({children}) {
    return(
      <BrowserRouter>

          <div className="h-full flex flex-row">
            <Sidebar/>
            <div className="h-full flex flex-col w-full">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<>dashboard</>}/>
                  <Route path="/admin" element={<>admin</>} />
                  <Route path="/reg" element={<>registration</>} />
                  <Route path="/plan" element={<>plan</>} />
                  <Route path="/payment" element={<>payment</>} />
                  <Route path="/inv" element={<>inventory</>} />
                  <Route path="/members" element={<>members</>} />
                  <Route path="/report" element={<>report</>} />
                </Routes>
            </div>
          </div>
        </BrowserRouter>
    )
}
