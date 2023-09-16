"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { protectedRoute } from "../../utils/privateRoute";
import illustrasi2 from "../../../public/image/illustrationankasa.svg";

function profile() {
    return (
        <>
            <Navbar />
            <div className="h-screen flex justify-center items-center">
                <div className=" md:flex flex-col items-center justify-center md:mt-2 hidden">
                    <Image src={illustrasi2} width={300} alt="ankasa" />
                    <h1 className="text-xl font-poppins font-semibold text-abu">Page Under Construction</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default protectedRoute(profile);
