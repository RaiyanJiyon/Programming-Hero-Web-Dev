import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-[90%] mx-auto">
            <Navbar />
            <div className={"min-h-[calc(100vh-290px)]"}>

            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;