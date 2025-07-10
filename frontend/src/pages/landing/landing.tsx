import React from 'react';
import Navbar from "../../components/Navbar";
import Hero from "./sections/hero";
import Newest from "./sections/newest";

export default function Landing() {
    return (
        <div className="w-full h-screen">
            <Hero />
            <Newest />
        </div>
    )
}