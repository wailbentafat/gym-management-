import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Outlet() {
    return(
        <div>
            <Navbar/>
                <Sidebar/>
                
        </div>
    )
}