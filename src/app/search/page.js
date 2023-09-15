"use client";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { protectedRoute } from "../privateRoute";
import illustrasi2 from "../../../public/image/illustrationankasa.svg";

function search() {
    return (
        <>
            <Navbar />
            <div className="h-screen">
                <div className="bg-main h-48 md:h-72 rounded-b-3xl relative">
                    <div className="hidden absolute -bottom-12 left-0 md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="310" height="310" viewBox="0 0 500 342" fill="none">
                            <path
                                d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                fill="#41A4FF"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className=" md:flex flex-col items-center justify-center md:mt-2 hidden">
                        <Image src={illustrasi2} width={300} alt="ankasa" />
                        <h1 className="text-xl font-poppins font-semibold text-abu">Page Under Construction</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default protectedRoute(search);
