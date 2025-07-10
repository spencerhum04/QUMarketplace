import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="bg-black h-16 w-full place-content-center px-6">
                <div className="flex flex-row justify-between">
                    <Link to="/">QUMarketplace</Link>
                    <div className="flex flex-row gap-x-10">
                        <Link to="/profile">Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}