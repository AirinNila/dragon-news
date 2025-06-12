import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const RightSideNav = () => {
    return (
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col w-full justify-center gap-4">
                <h3 className="font-extrabold text-xl">Login With</h3>
                <div className="flex flex-col gap-1">
                    <div className="w-full border-2 p-2 text-center rounded-md text-blue-500 border-blue-500 flex justify-center items-center gap-2">
                        <FaGoogle />
                       <p>Login with Google</p>
                        </div>
                    <div className="w-full border-2 p-2 text-center rounded-md text-black border-black flex justify-center items-center gap-2">
                        <FaGithub />
                        <p>Login with Github</p>
                        </div>
                 </div>
            </div>
            <div className="flex flex-col w-full justify-center gap-4">
                <h3 className="font-extrabold text-xl ">Find Us On</h3>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-2 border-2 border-gray-100 p-4">
                        <div className="bg-gray-100 rounded-full text-blue-400 p-2">
                            <FaFacebookF />
                        </div>
                        <p>Facebook</p>
                        </div>
                    <div className="flex justify-start items-center gap-2 border-x-2 border-gray-100 p-4">
                        <div className="bg-gray-100 rounded-full text-blue-500 p-2">
                            <FaTwitter />
                        </div>
                        <p>Twitter</p>
                        </div>
                    <div className="flex justify-start items-center gap-2 border-2 border-gray-100 p-4">
                        <div className="bg-gray-100 rounded-full text-orange-400 p-2">
                            <FaInstagram />

                        </div>
                       <p>Instagram</p>
                        </div>
                </div>
            </div>
            <div className="flex flex-col w-full justify-center p-4 rounded-md bg-gray-100 gap-4">
                <h3 className="font-extrabold text-xl">Q-Zone</h3>
                <img src="/public/swimming.png" alt="" />
                <img src="/public/class.png" alt="" />
                <img src="/public/playground.png" alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;