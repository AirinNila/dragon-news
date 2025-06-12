import Marquee from "react-fast-marquee";

const Title = () => {
    return (
        <div className="flex items-center gap-3 bg-gray-100 p-2">
            <button className="btn bg-red-500 p-2 text-white">Latest</button>
            <p className="text-sm font-bold md:text-xl">
                <Marquee>Today's Epic Clash: Full Match Highlights & Key Moments.
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </p>
        </div>
    );
};

export default Title;