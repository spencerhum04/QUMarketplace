import { Link } from "react-router-dom";

interface NavbarProps {
    searchActive: boolean;
}

export default function Navbar({ searchActive }: NavbarProps) {
    return (
        <div className="bg-black h-20 w-full px-6 flex items-center justify-between text-white">
            <Link to="/" className="text-white font-bold text-xl">QUMarketplace</Link>

            <div className="flex items-center gap-x-6">
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}
