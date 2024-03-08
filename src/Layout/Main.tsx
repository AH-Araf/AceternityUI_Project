import NavBar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
