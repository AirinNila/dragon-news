import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto p-3 md:p-0 poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;