import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext)
   
    const handleLoginForm = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const pass = formData.get('pass')
        loginUser(email, pass)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(email, pass)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center ">
            <div className=" md:w-2/5 md:p-6  bg-gray-50">
                <div className="card-body ">
                    <h2 className="text-xl md:text-2xl font-bold text-center">Login Your Account</h2>
                    <form onSubmit={handleLoginForm}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" name="email" placeholder="Email"/>
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" name="pass" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        </div>
                    </fieldset>
                    </form>
                    <p className="font-semibold text-center">Don't Have An Account?<span className="text-red-500 font-bold"><Link to="/register"> Register</Link></span></p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Login;