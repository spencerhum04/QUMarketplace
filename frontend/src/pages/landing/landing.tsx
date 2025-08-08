import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Hero from "./sections/hero";
import Newest from "./sections/newest";

export default function Landing() {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <div className="w-full bg-white">
            <Navbar searchActive={searchActive} />
            <Hero searchActive={searchActive} setSearchActive={setSearchActive} />

            {searchActive && (
                <div className="pt-32 px-8 transition-all duration-700 ease-in-out">
                    <h2 className="text-2xl font-bold mb-4">Search Results</h2>
                    <p>Showing results...</p>
                </div>
            )}

            {!searchActive && <Newest />}
        </div>
    );
}