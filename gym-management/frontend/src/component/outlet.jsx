import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registartionpage from "../pages/registration";
import Planpage from "../pages/plan";
import Testing from "../pages/Testing";
import SReport from "../pages/SReport";
export default function Outlet() {
    return(
      <BrowserRouter>
          <div className="overflow-hidden h-screen items-stretch min-h-full flex flex-row">
            <Sidebar/>
            <div className="h-screen overflow-y-auto flex flex-col w-full">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<>dashboard</>}/>
                  <Route path="/admin" element={<>admin</>} />
                  <Route path="/reg" element={<Registartionpage/>} />
                  <Route path="/plan" element={<Planpage/>} />
                  <Route path="/payment" element={<>payment</>} />
                  <Route path="/inv" element={<>inventory</>} />
                  <Route path="/members" element={<>members</>} />
                  <Route path="/report" element={<SReport/>} />
                  <Route path ="/test" element={<Testing/>}/>
                  <Route path="*" element={<>404</>} />
                </Routes>
                </div>
          </div>
        </BrowserRouter>
    )
}
