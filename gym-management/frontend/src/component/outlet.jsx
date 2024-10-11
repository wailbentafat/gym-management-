import Sidebar from "./sidebar";
import Navbar from "./navbar";
import RegistrForm from "./registration/registrform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Outlet() {
    return(
      <BrowserRouter>
          <div className="h-full flex flex-row">
            <Sidebar/>
            <div className="h-full flex flex-col w-full">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<>dashboard</>}/>
                  <Route path="/admin" element={<>admin</>} />
                  <Route path="/reg" element={<RegistrForm/>} />
                  <Route path="/plan" element={<>plan</>} />
                  <Route path="/payment" element={<>payment</>} />
                  <Route path="/inv" element={<>inventory</>} />
                  <Route path="/members" element={<>members</>} />
                  <Route path="/report" element={<>report</>} />
                  <Route path="*" element={<>404</>} />
                  <Route path ="/test" element={<>hna cmp</>} />
                </Routes>
            </div>
          </div>
        </BrowserRouter>
    )
}
