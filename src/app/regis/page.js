"use client";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ankasa from "../../../public/image/IconAnkasa.svg";
import illustrasi1 from "../../../public/image/illustration2.svg";
import illustrasi2 from "../../../public/image/illustrationankasa.svg";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Regis() {
    const router = useRouter();
    const [eye, setEye] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleEye = () => {
        if (eye) {
            setEye(false);
        } else {
            setEye(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (inputData.name === "" || inputData.email === "" || inputData.password === "") {
            Swal({
                title: "Register",
                text: "Must fill in all fields",
                icon: "warning",
                dangerMode: true,
            }).then((confirm) => {
                setLoading(false);
                if (confirm) {
                    // ...
                }
            });
        } else {
            const body = {
                name: inputData.name,
                email: inputData.email,
                password: inputData.password,
            };
            axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, body)
                .then((res) => {
                    console.log(res.data);
                    Swal.fire({
                        title: "Register",
                        text: "Register Successfully!",
                        icon: "success",
                    }).then((confirm) => {
                        setLoading(false);
                        if (confirm) {
                            router.push("/login");
                        }
                    });
                })
                .catch((err) => {
                    console.log(err.response);
                    setLoading(false);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: err.response?.data?.message || "An error occurred during registration.",
                    });
                });
        }
    };

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="../../../public/favicon.png" />
                <title>Register | Ankasa</title>
            </Head>
            <div className="flex">
                <div className="hidden lg:flex w-1/2 bg-main justify-center items-center">
                    <Image src={illustrasi1} width={400} alt="ankasa" />
                </div>
                <div className=" w-screen h-screen lg:w-1/2 relative">
                    <div className="container  px-16 md:px-32 md:mx-auto">
                        <div className="flex items-center mt-5 md:mt-6">
                            <Image src={ankasa} alt="ankasa" />
                            <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                        </div>
                        <div className="hidden md:flex justify-center md:mt-2 lg:hidden">
                            <Image src={illustrasi2} width={300} alt="ankasa" />
                        </div>
                        <form className="mt-8 lg:mt-4" onSubmit={handleSubmit}>
                            <h1 className="font-poppins text-3xl font-bold">Register</h1>
                            <div className="border-b-4 border-b-gray-200 mt-8">
                                <input
                                    type="text"
                                    className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu"
                                    placeholder="Full Name"
                                    required
                                    value={inputData.name}
                                    onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                                />
                            </div>
                            <div className="border-b-4 border-b-gray-200 mt-8">
                                <input
                                    type="email"
                                    className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu"
                                    placeholder="Email"
                                    required
                                    value={inputData.email}
                                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
                                />
                            </div>
                            <div className="border-b-4 border-b-gray-200 mt-6 flex justify-center items-center">
                                <input
                                    type={eye ? "text" : "password"}
                                    className="w-full h-10 focus:outline-none p-4 font-poppins font-medium text-md text-abu"
                                    placeholder="Password"
                                    required
                                    value={inputData.password}
                                    onChange={(e) => setInputData({ ...inputData, password: e.target.value })}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={handleEye} className="cursor-pointer">
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
                            <div className="flex mt-8 items-center">
                                <input type="checkbox" name="terms" id="terms" className="h-4 w-4 rounded-lg border-4 accent-main" required />
                                <label htmlFor="terms" className="font-poppins ml-2 text-xs text-abu">
                                    Accept terms and condition
                                </label>
                            </div>
                            <button
                                type="submit"
                                className={`mt-8 w-full h-12 bg-main shadow-lg shadow-main/50 rounded-lg flex justify-center items-center hover:bg-blue-500 cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={loading}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-1.732A7.965 7.965 0 0120 12h4c0-6.627-5.373-12-12-12v4zm-2 7.423V24c4.418 0 8-3.582 8-8h-4c0 3.27-1.316 6.271-3.464 8.451z"
                                        ></path>
                                    </svg>
                                ) : (
                                    <h1 className="text-white font-poppins text-md font-semibold">Sign Up</h1>
                                )}
                            </button>
                        </form>
                        <hr className="border-t-1 border-abu mt-8" />
                        <div className="mt-4 flex flex-col justify-center items-center">
                            <h1 className="font-poppins text-sm text-abu">Already have an account?</h1>
                        </div>
                        <a href="/login" className="mt-4 w-full h-12 bg-white text-main font-poppins text-md font-semibold border-main border-2 rounded-lg flex justify-center items-center hover:bg-main hover:text-white cursor-pointer">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Regis;
