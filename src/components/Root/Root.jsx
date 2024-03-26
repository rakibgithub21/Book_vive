import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            {/* nav */}

            {/* Outlet */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;