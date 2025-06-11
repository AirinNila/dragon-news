import moment from "moment";
const Header = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <div>
                <img src="/public/logo.png" className="w-42 md:w-full" alt="logo" />
            </div>
            <p className="text-sm md:text-xl des">Journalism without fear and favour</p>
            <p className="font-bold text-sm md:text-xl">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;