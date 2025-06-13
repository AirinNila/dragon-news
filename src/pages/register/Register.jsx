import { useContext } from "react";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
    const {creatRegisterUser} = useContext(AuthContext)
      const handleRegisterForm = e => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        const img = formData.get('img')
        const email = formData.get('email')
        const pass = formData.get('pass')
        creatRegisterUser(email, pass )
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        
        console.log(email, pass, name, img)
      }
    return (
        <div>
             <Navbar></Navbar>
            <div className="flex justify-center ">
            <div className=" md:w-2/5 md:p-6  bg-gray-50">
                <div className="card-body ">
                    <h2 className="text-xl md:text-2xl font-bold text-center">Register Your Account</h2>
                    <form onSubmit={handleRegisterForm}>
                    <fieldset className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" className="input w-full" name="name" placeholder="Enter Your Name"/>
                        <label className="label">Photo URL</label>
                        <input type="text" className="input w-full" name="img" placeholder="Enter Your Photo URL"/>
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" name="email" placeholder="Enter Your Email"/>
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" name="pass" placeholder="Enter your Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div>
                        <button className="btn btn-neutral w-full mt-4">Register</button>
                        </div>
                    </fieldset>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;