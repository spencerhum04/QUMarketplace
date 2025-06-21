import Navbar from "../../components/Navbar";
import Hero from "./hero";
import Newest from "./newest";

export default function Landing() {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <Hero />
            <Newest />
        </div>
    )
}