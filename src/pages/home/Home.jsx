import Header from "../../components/Header";
import LeftSideNav from "../../components/LeftSideNav";
import Navbar from "../../components/Navbar";
import RightSideNav from "../../components/RightSideNav";
import Title from "../../components/Title";

const Home = () => {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Header></Header>
            <Title></Title>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2"></div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;