import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Register() {

    const [login, setLogin] = useState(true);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, username, email, password);
    }

    return (
        <>
            <Navbar />
            <form>
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
            </form>
        </>
    )
}