
const RightSideNav = () => {
    return (
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col w-full justify-center gap-4">
                <h3 className="font-extrabold text-xl">Login With</h3>
                <div className="flex flex-col gap-1">
                    <div className="w-full border-2 p-2 text-center rounded-md text-blue-500 border-blue-500">Login with Google</div>
                    <div className="w-full border-2 p-2 text-center rounded-md text-black border-black">Login with Github</div>
                 </div>
            </div>
            <div className="flex flex-col w-full justify-center gap-4">
                <h3 className="font-extrabold text-xl">Find Us On</h3>
                <div className="flex flex-col">
                    <div className="border-2 border-gray-100 p-4">Facebook</div>
                    
                    <div className="border-x-2 border-gray-100 p-4">Twitter</div>
                    
                    <div className="border-2 border-gray-100 p-4">Instagram</div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default RightSideNav;