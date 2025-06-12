import Navbar from "../../components/Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center ">
            <div className=" md:w-2/5 md:p-6  bg-gray-50">
                <div className="card-body ">
                    <h2 className="text-xl md:text-2xl font-bold">Login Your Account</h2>
                    <form>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email"/>
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        </div>
                    </fieldset>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;