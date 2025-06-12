import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCatergories] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatergories(data))
    } ,[])
    
    return (
     <div className="flex flex-col w-full justify-center gap-2 items-start">
        <h2 className="font-extrabold w-full">All Categories</h2>
        <div className="flex flex-col w-full p-4 pl-4 bg-gray-50 gap-2">
            {
                categories.map(category => <div className="p-2" key={category.id}><Link
                to={`/category/${category.id}`}>
                {category.name}</Link></div>)
            }
        </div>
     </div>
    );
};

export default LeftSideNav;