import { CiShare2, CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const News = ({ data }) => {
    const { title, author, image_url, details, id } = data;
    return (
        <div className="flex flex-col">
            <div className="bg-gray-100 p-4 rounded-tl-selector rounded-tr-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={author.img} alt="" className="rounded-full w-10 md:w-16" />
                    <div className="flex flex-col items-start justify-center gap-1 md:gap-2">
                        <h2 className="font-bold">{author.name}</h2>
                        <p className="des text-sm md:text-md">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-2 items-center text-md md:text-3xl">
                    <CiShare2 />
                    <CiBookmark />
                </div>
            </div>
            <div className="card rounded-0 border-2 border-gray-100 p-2 md:p-4 w-full">
                <div className="card-body">

                    <p className="card-title">{title}</p>
                </div>
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" className="rounded-md" />
                </figure>
                {
                    details.length > 200
                    ?  <p className="text-base des mt-6">{details.slice(0,200)} <Link className="text-blue-600 font-bold" to={`/news/${id}`}>Read more..</Link></p>
                    :  <p className="text-base des mt-6">{details}</p>
                }
                
               
               
                <div className="border-t-2 p-3 border-t-gray-100 mt-3">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default News;