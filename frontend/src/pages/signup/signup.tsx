import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import Navbar from "../../components/Navbar";

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-y-2 w-40">
                <label>Name</label>
                <input className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Username</label>
                <input className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Email address</label>
                <input className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Password</label>
                <input className="bg-white text-black" />
            </div>
import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Register() {

    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginSignupHandler = () => {
        setLogin(!login);
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (login) {
            try {
                const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password });
            } catch (error) {
                console.log(error);
            }
        }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, username, email, password);
    }

    return (
        <>
            <Navbar />
            <form onSubmit={submitHandler} className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-white text-black" />
                </div>
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-white text-black" />
                </div>
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Email address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white text-black" />
                </div>
                <div className="flex flex-col gap-y-2 w-40">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white text-black" />
                </div>
                <button onClick={loginSignupHandler} className="bg-blue-300 p-4 w-40 cursor-pointer">Sign up</button>
                <button onClick={loginSignupHandler} className="bg-blue-300 p-4 w-40">Sign up</button>
            </form>
        </>
    )
}