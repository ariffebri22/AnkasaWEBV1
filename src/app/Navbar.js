"use client";
import React, { useState } from "react";
import Image from "next/image";
import ankasa from "../../public/image/IconAnkasa.svg";
import search from "../../public/image/search.svg";
import burger1 from "../../public/image/buger1.png";
import burger2 from "../../public/image/burger2.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Find Ticket");

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <header className="w-full fixed">
                <div className="bg-white py-4 lg:px-28 max-w-7xl mx-auto flex px-5 justify-between">
                    <div className="flex items-center">
                        <Image src={ankasa} alt="ankasa" />
                        <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                    </div>
                    <div className="hidden md:flex rounded-md bg-gray-200 ml-5 items-center h-10">
                        <Image src={search} alt="search" className="ml-4" width={20} />
                        <input type="text" name="search" id="search" className="h-full w-44 rounded-md bg-gray-200 pl-2 active:border-none text-xs focus:outline-none" placeholder="Where you want to go?" />
                    </div>
                    <div className="hidden md:flex gap-6 items-center font-poppins font-medium">
                        <h1 className="cursor-pointer text-abu hover:text-gray-800">Find Ticket</h1>
                        <h1 className="cursor-pointer text-abu hover:text-gray-800">My Booking</h1>
                    </div>
                    <div className="hidden md:flex w-28 h-10 bg-blue-500 items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50">
                        <h1 className="text-white text-sm font-medium">Sign Up</h1>
                    </div>
                    <div className="md:hidden">
                        <div className={`fixed inset-0 bg-opacity-50 w-full transform transition-transform ${isMenuOpen ? "translate-x-0 transition duration-500 ease-in-out" : "translate-x-full transition duration-500 ease-in-out"}`}>
                            <div className="absolute bg-blue-500 w-72 h-full right-0 pt-4 px-4">
                                <Image src={burger2} alt="burger" width={45} onClick={toggleMenu} className="cursor-pointer" />
                                <div className="flex rounded-md bg-gray-200 items-center h-10 mt-5">
                                    <Image src={search} alt="search" className="ml-4" width={20} />
                                    <input type="text" name="search" id="search" className="h-full w-44 rounded-md bg-gray-200 pl-2 active:border-none text-xs focus:outline-none" placeholder="Where you want to go?" />
                                </div>
                                <div className="flex gap-6 items-center font-poppins font-medium mt-8 justify-between px-5">
                                    <h1 className={`cursor-pointer ${activeTab === "Find Ticket" ? "text-white hover:text-gray-800" : "text-abu hover:text-gray-800"}`} onClick={() => handleTabClick("Find Ticket")}>
                                        Find Ticket
                                    </h1>
                                    <h1 className={`cursor-pointer ${activeTab === "My Booking" ? "text-white hover:text-gray-800" : "text-abu hover:text-gray-800"}`} onClick={() => handleTabClick("My Booking")}>
                                        My Booking
                                    </h1>
                                </div>
                                {activeTab === "Find Ticket" && (
                                    <div className="bg-white w-full h-96 mt-3 rounded-md p-4">
                                        <div>
                                            <h1 className="text-sm font-poppins font-medium">
                                                Hey, <br />
                                                Where you want to go?
                                            </h1>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "My Booking" && <div className="bg-green-300 w-full h-96 mt-3 rounded-md p-4">Preview for My Booking</div>}
                                <div className="flex w-full h-10 mt-8 bg-blue-400 items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50">
                                    <h1 className="text-white text-sm font-medium">Sign Up</h1>
                                </div>
                            </div>
                        </div>
                        <Image src={burger1} alt="burger" width={45} onClick={toggleMenu} className={`cursor-pointer`} />
                    </div>
                </div>
            </header>
        </>
    );
}
