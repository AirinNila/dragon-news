import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import RightSideNav from "../../components/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="flex">
                 <div className="w-3/4">
                    {id}
                </div>
                <div className="w-1/4">
                    <RightSideNav></RightSideNav>
                </div>
               
            </div>
        </div>
    );
};

export default NewsDetails;