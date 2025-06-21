import { useState } from "react";
import Navbar from "../../components/Navbar";

const [login, setLogin] = useState(true);
const [name, setName] = useState("");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col gap-y-2 w-40">
                <label>Name</label>
                <input type="text" value={name} className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Username</label>
                <input type="text" value={username} className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Email address</label>
                <input type="email" value={email} className="bg-white text-black" />
            </div>
            <div className="flex flex-col gap-y-2 w-40">
                <label>Password</label>
                <input type="password" value={password} className="bg-white text-black" />
            </div>
        </>
    )
}