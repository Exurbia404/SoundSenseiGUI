import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLogin, fetchUserById } from "../redux/features/userSlice";
import Loader from "./Loader";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userId, user, loading, error } = useSelector((state) => state.userLogin)
    const handleLogin = () => {
        dispatch(fetchLogin({ email: email, password: password }))
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
        dispatch(fetchUserById(userId))
        console.log(userId);
    }, [userId, user, navigate])


    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div className="w-[350px] h-[350px] flex items-center flex-col justify-center bg-gradient-to-tr rounded-xl from-slate-300 to-gray-300">
                <h2 className="font-bold text-2xl mb-6">Login</h2>

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
                    onClick={handleLogin}
                    className="bg-blue-500 px-4 py-2 rounded-lg text-white"
                >
                    {
                        loading ? <Loader /> : <p>Login</p>
                    }
                </button>
                <p className="mt-4">
                    Don't have an account ?
                    <Link
                        to={"/signup"}
                    >
                        <span className="text-blue-500">Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Login