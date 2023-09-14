"use client";
import React, { useState } from "react";
import ankasa from "../../../public/image/IconAnkasa.svg";
import illustrasi1 from "../../../public/image/illustration2.svg";
import illustrasi2 from "../../../public/image/illustrationankasa.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function login() {
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
        router.push("/");
    };

    return (
        <>
            <div className="flex">
                <div className="hidden lg:flex w-1/2 bg-main justify-center items-center">
                    <Image src={illustrasi1} width={400} />
                </div>
                <div className=" w-screen h-screen lg:w-1/2 relative">
                    <div className="container  px-16 md:px-32 md:mx-auto">
                        <div className="flex items-center mt-5 md:mt-6">
                            <Image src={ankasa} alt="ankasa" />
                            <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                        </div>
                        <div className="hidden md:flex justify-center md:mt-2 lg:hidden">
                            <Image src={illustrasi2} width={400} />
                        </div>
                        <div className=" flex md:hidden justify-center mt-2 lg:hidden">
                            <Image src={illustrasi2} width={100} />
                        </div>
                        <form className="mt-5 lg:mt-20" onSubmit={handleSubmit}>
                            <h1 className="font-poppins text-3xl font-bold">Login</h1>
                            <div className="border-b-4 border-b-gray-200 mt-8">
                                <input type="text" className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu" placeholder="Username" required />
                            </div>
                            <div className="border-b-4 border-b-gray-200 mt-6 flex justify-center items-center">
                                <input type={eye ? "text" : "password"} className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu" placeholder="Password" required />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleEye}>
                                    <path
                                        d="M23.8475 11.5331C23.6331 11.2398 18.5245 4.35156 11.9999 4.35156C5.47529 4.35156 0.366469 11.2398 0.152297 11.5328C-0.0507657 11.8111 -0.0507657 12.1885 0.152297 12.4667C0.366469 12.76 5.47529 19.6483 11.9999 19.6483C18.5245 19.6483 23.6331 12.76 23.8475 12.467C24.0508 12.1888 24.0508 11.8111 23.8475 11.5331ZM11.9999 18.0659C7.19383 18.0659 3.03127 13.494 1.79907 11.9994C3.02968 10.5035 7.18351 5.93397 11.9999 5.93397C16.8057 5.93397 20.968 10.505 22.2007 12.0005C20.9701 13.4963 16.8163 18.0659 11.9999 18.0659Z"
                                        fill="#2395FF"
                                    />
                                    <path
                                        d="M12 7.25269C9.38236 7.25269 7.25269 9.38236 7.25269 12C7.25269 14.6176 9.38236 16.7472 12 16.7472C14.6175 16.7472 16.7472 14.6176 16.7472 12C16.7472 9.38236 14.6175 7.25269 12 7.25269ZM12 15.1648C10.2548 15.1648 8.83514 13.7451 8.83514 12C8.83514 10.2548 10.2548 8.83514 12 8.83514C13.7451 8.83514 15.1648 10.2548 15.1648 12C15.1648 13.7451 13.7451 15.1648 12 15.1648Z"
                                        fill="#2395FF"
                                    />
                                </svg>
                            </div>
                            <div className="mt-3 flex justify-end">
                                <a href="/forgot" className="font-poppins text-sm text-main underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" className="mt-3 w-full h-12 bg-main shadow-lg shadow-main/50 rounded-lg flex justify-center items-center hover:bg-blue-500">
                                <h1 className="text-white font-poppins text-md font-semibold">Sign In</h1>
                            </button>
                        </form>
                        <hr className="border-t-1 border-abu mt-8" />
                        <div className="mt-4 flex flex-col justify-center items-center">
                            <h1 className="font-poppins text-sm text-abu">Don't have an account yet?</h1>
                        </div>
                        <a href="/regis" className="mt-4 w-full h-12 bg-white border-main border-2 rounded-lg flex justify-center items-center hover:bg-slate-200 cursor-pointer">
                            <h1 className="text-main font-poppins text-md font-semibold ">Sign Up</h1>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
