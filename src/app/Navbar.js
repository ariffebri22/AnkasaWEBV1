"use client";
import React, { useState } from "react";
import Image from "next/image";
import ankasa from "../../public/image/IconAnkasa.svg";
import search from "../../public/image/search.svg";
import burger1 from "../../public/image/buger1.png";
import burger2 from "../../public/image/burger2.png";
import back from "../../public/image/btnback.svg";
import transfer from "../../public/image/transfer.svg";
import flight from "../../public/image/flight.svg";
import cycle from "../../public/image/recycle.svg";
import arrow from "../../public/image/rightarrow.svg";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Find Ticket");
    const [openFind, setOpenFind] = useState(false);
    const [openMyBooking, setOpenMyBooking] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [inputValue, setInputValue] = useState("");

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setSelectedDate(selectedDate);
        setInputValue(formatDate(selectedDate));
        setShowCalendar(false);
    };

    const formatDate = (dateString) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", options);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleFindClick = () => {
        if (openFind) {
            setOpenFind(false);
            setOpenMyBooking(false);
        } else {
            setOpenFind(true);
            setOpenMyBooking(false);
        }
    };

    const handleMyBookingClick = () => {
        if (openMyBooking) {
            setOpenFind(false);
            setOpenMyBooking(false);
        } else {
            setOpenFind(false);
            setOpenMyBooking(true);
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <header className="w-full fixed z-50">
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
                        <a href="#" className={`cursor-pointer ${openFind ? "text-main hover:text-gray-800" : "text-abu hover:text-gray-800"}`} onClick={handleFindClick}>
                            Find Ticket
                        </a>
                        <h1 className={`cursor-pointer ${openMyBooking ? "text-main hover:text-gray-800" : "text-abu hover:text-gray-800"}`} onClick={handleMyBookingClick}>
                            My Booking
                        </h1>
                    </div>
                    <div className="hidden md:flex w-28 h-10 bg-main items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50">
                        <a href="#" className="text-white text-sm font-medium">
                            Sign Up
                        </a>
                    </div>
                    {openFind && (
                        <div className="bg-white w-custom h-height overflow-y-scroll mt-14 rounded-lg p-6 fixed right-32 lg:right-60 z-50 shadow-lg shadow-black/50">
                            <div>
                                <h1 className="text-sm font-poppins font-medium">
                                    Hey, <br />
                                    Where you want to go?
                                </h1>
                                <div className="flex justify-between items-center mt-4">
                                    <h1 className="text-xs text-main font-semibold">Recently Searched</h1>
                                    <Image src={back} width={8} />
                                </div>
                                <div className="w-full bg-white shadow-lg shadow-slate-500/30 mt-4 rounded-xl p-2 flex flex-row items-center justify-between">
                                    <div className="flex flex-col justify-start">
                                        <h1 className="text-xs text-slate-400">From</h1>
                                        <h1 className="text-xl mt-1 font-bold">Medan</h1>
                                        <h1 className="text-xs mt-1">Indonesia</h1>
                                    </div>
                                    <Image src={transfer} width={20} />
                                    <div className="flex flex-col justify-end">
                                        <h1 className="text-xs text-slate-400 text-end">To</h1>
                                        <h1 className="text-xl mt-1 font-bold text-end">Tokyo</h1>
                                        <h1 className="text-xs mt-1 text-end">Japan</h1>
                                    </div>
                                </div>
                                <div className="mt-4 w-full flex justify-between">
                                    <div class="w-32 bg-main rounded-lg h-11 flex items-center justify-center p-2 hover:bg-blue-600">
                                        <Image src={flight} width={18} />
                                        <a href="#" className="text-xs font-semibold text-white ml-2">
                                            One Way
                                        </a>
                                    </div>
                                    <div className="w-32 bg-slate-200 rounded-lg h-11 flex items-center justify-center p-2 hover:bg-slate-300">
                                        <Image src={cycle} width={18} />
                                        <a href="#" className="text-xs font-semibold text-abu ml-2">
                                            Round Trip
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">Departure</h1>
                                    <div className="relative mt-2">
                                        <input type="text" placeholder="Select date" value={inputValue} onFocus={toggleCalendar} readOnly className="w-full rounded-lg border border-gray-300 text-xs h-14 p-4 font-bold" />
                                        <div className="absolute z-10 top-2 right-2 bg-white  p-2 rounded-lg w-9">
                                            <input type="date" onChange={handleDateChange} className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">How many person?</h1>
                                    <div class="flex w-full justify-between">
                                        <div className="flex mt-2 rounded-lg border border-gray-300 text-xs h-14 w-32 p-4 font-bold items-center justify-between">
                                            <h1>2 Child</h1>
                                            <Image src={back} width={10} />
                                        </div>
                                        <div className="flex mt-2 rounded-lg border border-gray-300 text-xs h-14 w-32 p-4 font-bold items-center justify-between">
                                            <h1>4 Adult</h1>
                                            <Image src={back} width={10} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">Which class do you want?</h1>
                                    <div className="flex w-full justify-between">
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="economy" />
                                            <label htmlFor="economy" className="ml-1 text-sm">
                                                Economy
                                            </label>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="business" />
                                            <label htmlFor="business" className="ml-1 text-sm">
                                                Business
                                            </label>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="firstclass" />
                                            <label htmlFor="firstclass" className="ml-1 text-sm">
                                                First Class
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mt-6 bg-main rounded-md h-11 flex justify-between items-center px-5 shadow-lg shadow-blue-500/50 hover:bg-blue-600 cursor-pointer">
                                    <h1 className="text-sm font-semibold text-white">SEARCH FLIGHT</h1>
                                    <Image src={arrow} width={20} />
                                </div>
                            </div>
                        </div>
                    )}
                    {openMyBooking && (
                        <div className="bg-white w-custom h-height overflow-y-scroll mt-14 rounded-lg p-6 fixed right-32 lg:right-60 z-50 shadow-lg shadow-black/50">
                            <div>
                                <h1 className="text-sm font-poppins font-medium">
                                    Hey, <br />
                                    Where you want to go?
                                </h1>
                                <div className="flex justify-between items-center mt-4">
                                    <h1 className="text-xs text-main font-semibold">Recently Searched</h1>
                                    <Image src={back} width={8} />
                                </div>
                                <div className="w-full bg-white shadow-lg shadow-slate-500/30 mt-4 rounded-xl p-2 flex flex-row items-center justify-between">
                                    <div className="flex flex-col justify-start">
                                        <h1 className="text-xs text-slate-400">From</h1>
                                        <h1 className="text-xl mt-1 font-bold">Medan</h1>
                                        <h1 className="text-xs mt-1">Indonesia</h1>
                                    </div>
                                    <Image src={transfer} width={20} />
                                    <div className="flex flex-col justify-end">
                                        <h1 className="text-xs text-slate-400 text-end">To</h1>
                                        <h1 className="text-xl mt-1 font-bold text-end">Tokyo</h1>
                                        <h1 className="text-xs mt-1 text-end">Japan</h1>
                                    </div>
                                </div>
                                <div className="mt-4 w-full flex justify-between">
                                    <div class="w-32 bg-main rounded-lg h-11 flex items-center justify-center p-2 hover:bg-blue-600">
                                        <Image src={flight} width={18} />
                                        <a href="#" className="text-xs font-semibold text-white ml-2">
                                            One Way
                                        </a>
                                    </div>
                                    <div className="w-32 bg-slate-200 rounded-lg h-11 flex items-center justify-center p-2 hover:bg-slate-300">
                                        <Image src={cycle} width={18} />
                                        <a href="#" className="text-xs font-semibold text-abu ml-2">
                                            Round Trip
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">Departure</h1>
                                    <div className="relative mt-2">
                                        <input type="text" placeholder="Select date" value={inputValue} onFocus={toggleCalendar} readOnly className="w-full rounded-lg border border-gray-300 text-xs h-14 p-4 font-bold" />
                                        <div className="absolute z-10 top-2 right-2 bg-white  p-2 rounded-lg w-9">
                                            <input type="date" onChange={handleDateChange} className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">How many person?</h1>
                                    <div class="flex w-full justify-between">
                                        <div className="flex mt-2 rounded-lg border border-gray-300 text-xs h-14 w-32 p-4 font-bold items-center justify-between">
                                            <h1>2 Child</h1>
                                            <Image src={back} width={10} />
                                        </div>
                                        <div className="flex mt-2 rounded-lg border border-gray-300 text-xs h-14 w-32 p-4 font-bold items-center justify-between">
                                            <h1>4 Adult</h1>
                                            <Image src={back} width={10} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <h1 className="text-gray-400 text-sm font-semibold">Which class do you want?</h1>
                                    <div className="flex w-full justify-between">
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="economy" />
                                            <label htmlFor="economy" className="ml-1 text-sm">
                                                Economy
                                            </label>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="business" />
                                            <label htmlFor="business" className="ml-1 text-sm">
                                                Business
                                            </label>
                                        </div>
                                        <div className="flex mt-3 items-center">
                                            <input type="radio" name="ticketClass" id="firstclass" />
                                            <label htmlFor="firstclass" className="ml-1 text-sm">
                                                First Class
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full mt-6 bg-main rounded-md h-11 flex justify-between items-center px-5 shadow-lg shadow-blue-500/50 hover:bg-blue-600 cursor-pointer">
                                    <h1 className="text-sm font-semibold text-white">SEARCH FLIGHT</h1>
                                    <Image src={arrow} width={20} />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="md:hidden z-50">
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
