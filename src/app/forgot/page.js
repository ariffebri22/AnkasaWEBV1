"use client";
import React, { useState } from "react";
import ankasa from "../../../public/image/IconAnkasa.svg";
import illustrasi1 from "../../../public/image/illustration2.svg";
import illustrasi2 from "../../../public/image/illustrationankasa.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Forgot() {
    const [eye, setEye] = useState(false);
    const router = useRouter();

    const handleEye = () => {
        if (eye) {
            setEye(false);
        } else {
            setEye(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/login");
    };

    return (
        <>
            <div className="flex">
                <div className="hidden lg:flex w-1/2 bg-main justify-center items-center">
                    <Image src={illustrasi1} width={400} alt="illustrasi" />
                </div>
                <div className=" w-screen h-screen lg:w-1/2 relative">
                    <div className="container  px-16 md:px-32 md:mx-auto">
                        <div className="flex items-center mt-5 md:mt-6">
                            <Image src={ankasa} alt="ankasa" />
                            <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                        </div>
                        <div className="hidden md:flex justify-center md:mt-2 lg:hidden">
                            <Image src={illustrasi2} width={400} alt="illustrasi" />
                        </div>
                        <div className=" flex md:hidden justify-center mt-2 lg:hidden">
                            <Image src={illustrasi2} width={200} alt="illustrasi" />
                        </div>
                        <form className="mt-5 lg:mt-28" onSubmit={handleSubmit}>
                            <h1 className="font-poppins text-3xl font-bold">Forgot Password</h1>
                            <div className="border-b-4 border-b-gray-200 mt-8">
                                <input type="email" className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu" placeholder="Email" required />
                            </div>
                            <button type="submit" className="mt-8 w-full h-12 bg-main shadow-lg shadow-main/50 rounded-lg flex justify-center items-center hover:bg-blue-500">
                                <h1 className="text-white font-poppins text-md font-semibold">Send</h1>
                            </button>
                        </form>
                        <div className="mt-6 flex flex-col justify-center items-center">
                            <h1 className="font-poppins text-xs md:text-base text-abu">You’ll get message soon on your email</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
