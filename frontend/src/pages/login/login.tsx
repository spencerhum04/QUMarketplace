import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import toast from "react-hot-toast";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar searchActive={false} />
            <form onSubmit={submitHandler} className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white text-black" />
                </div>
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white text-black" />
                </div>
                <button type="submit" className="bg-blue-300 p-4 w-40 cursor-pointer">Login</button>
            </form>
        </>
    )
}