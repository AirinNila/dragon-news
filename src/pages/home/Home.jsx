import { useEffect, useState } from "react";
import Header from "../../components/Header";
import LeftSideNav from "../../components/LeftSideNav";
import Navbar from "../../components/Navbar";
import RightSideNav from "../../components/RightSideNav";
import Title from "../../components/Title";
import News from "../../components/news";

const Home = () => {
    const [news, setNews] = useState([])

    useEffect( () => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div className="flex flex-col gap-4 mt-4">
            <Header></Header>
            <Title></Title>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                    <p className="font-extrabold">Dragon News Home</p>
                    {
                        news.slice(0,3).map(data => <News key={data.id} data={data}></News>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;