import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../redux/features/userSlice";
import Loader from "./Loader";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const {user,loading,error} = useSelector((state)=>state.userLogin)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignup = () =>{
        dispatch(createUser({id:0,username,password,email,userImageLink:'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',hasProducts:[],wantProducts:[]}))
    }

    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user])
    
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="w-[350px] h-[350px] flex items-center flex-col justify-center bg-gradient-to-tr rounded-xl from-slate-300 to-gray-300">
                <h2 className="font-bold text-2xl mb-6">Sign Up</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setUsername(e.target.value)}
                    className="outline-none text-lg rounded-lg mb-5 px-4 py-2 focus:border border-blue-500"
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="outline-none text-lg rounded-lg px-4 py-2 focus:border border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="outline-none text-lg my-5 rounded-lg px-4 py-2 focus:border border-blue-500"
                />
                    <button
                        onClick={handleSignup}
                        className="bg-blue-500 px-4 py-2 rounded-lg text-white"
                    >
                        {
                            loading ? <Loader /> : <p>Signup</p>
                        }
                    </button>
                <p className="mt-4">
                    Already have an acoount ?{" "}
                    <Link to={"/login"}>
                        <span className="text-blue-500">Log in</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Signup