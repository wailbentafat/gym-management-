import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registartionpage from "../pages/registration";
import Planpage from "../pages/plan";
export default function Outlet() {
    return(
      <BrowserRouter>
          <div className="items-stretch h-max min-h-full flex flex-row">
            <Sidebar/>
            <div className="min-h-full flex flex-col w-full">
                <Navbar/>
                <Routes>
                  <Route path="/" element={<>dashboard</>}/>
                  <Route path="/admin" element={<>admin</>} />
                  <Route path="/reg" element={<Registartionpage/>} />
                  <Route path="/plan" element={<Planpage/>} />
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
