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
        </>
    )
}