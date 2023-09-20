"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RangeSlider from "../../components/RangeSlider";
import { privateRoute } from "../../utils/privateRoute";
import { useRouter } from "next/navigation";
import airplaneLoading from "../../../public/image/airplane.gif";

function Search() {
    const router = useRouter();
    const [openTransit, setOpenTransit] = useState(false);
    const [openFacilities, setOpenFacilities] = useState(false);
    const [openDepTime, setOpenDepTime] = useState(false);
    const [openAriveTime, setOpenAriveTime] = useState(false);
    const [openAirlines, setOpenAirlines] = useState(false);
    const [openTicketPrice, setOpenTicketPrice] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [flightData, setFlightData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}airlines/flight`)
            .then((response) => {
                const data = response.data.data;

                const modifiedData = data.map((flight) => {
                    const takeoffTime = flight.takeoff.substr(11, 5);
                    const landingTime = flight.landing.substr(11, 5);

                    const takeoffHour = parseInt(takeoffTime.split(":")[0]);
                    const takeoffMinute = parseInt(takeoffTime.split(":")[1]);
                    const landingHour = parseInt(landingTime.split(":")[0]);
                    const landingMinute = parseInt(landingTime.split(":")[1]);

                    const hours = landingHour - takeoffHour;
                    const minutes = landingMinute - takeoffMinute;

                    const formattedTimeDistance = `${hours} hours ${minutes} minutes`;

                    return {
                        ...flight,
                        takeoffTime,
                        landingTime,
                        timeDistance: formattedTimeDistance,
                    };
                });

                setFlightData(modifiedData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    }, []);

    const handleOpenDropdown = (state, setState) => {
        setState(!state);
    };

    const toggleMenu = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleSelect = () => {
        router.push("/search/details");
    };

    console.log(Array.isArray(flightData));

    return (
        <div className="bg-slate-100">
            <Navbar />
            <div className="fixed w-full bg-transparent mt-16 h-36 lg:z-10">
                <div className="bg-main rounded-b-3xl relative flex h-32">
                    <div className="hidden absolute -bottom-6 left-0 z-10 lg:z-20 md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 500 342" fill="none">
                            <path
                                d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                fill="#41A4FF"
                            />
                        </svg>
                    </div>
                    <div className="absolute -bottom-6 left-0 z-10 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 500 342" fill="none">
                            <path
                                d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                fill="#41A4FF"
                            />
                        </svg>
                    </div>
                    <div className="container mx-auto flex md:justify-between md:items-center ">
                        <div className=" px-6 flex flex-col md:flex-row md:w-full  md:gap-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 35" fill="none" className="md:hidden">
                                <path
                                    d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z"
                                    fill="white"
                                />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 35" fill="none" className="hidden md:block mb-4 z-30">
                                <path
                                    d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z"
                                    fill="white"
                                />
                            </svg>
                            <div className="z-20">
                                <div className="flex justify-between items-end gap-6">
                                    <div>
                                        <h1 className="text-white font-poppins text-xs">From</h1>
                                        <h1 className="text-white font-poppins text-lg font-medium">Medan (IDN)</h1>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="mb-1">
                                        <path
                                            d="M16.6888 4.69033L13.8123 7.56688C13.6048 7.77437 13.3329 7.8781 13.0609 7.8781C12.789 7.8781 12.5171 7.77437 12.3096 7.56688C11.8947 7.15194 11.8947 6.47922 12.3096 6.06428L13.3724 5.00154H2.23291C1.64611 5.00154 1.17041 4.52584 1.17041 3.93904C1.17041 3.35225 1.64611 2.87654 2.23291 2.87654H13.3724L12.3096 1.81381C11.8947 1.39887 11.8947 0.726144 12.3096 0.311205C12.7246 -0.103735 13.3973 -0.103735 13.8123 0.311205L16.6888 3.18776C17.1037 3.60266 17.1037 4.27542 16.6888 4.69033ZM14.186 11.9984H3.62761L4.69037 10.9357C5.10528 10.5208 5.10528 9.84804 4.69037 9.4331C4.2754 9.01816 3.60271 9.01816 3.18773 9.4331L0.31118 12.3097C-0.103727 12.7246 -0.103727 13.3973 0.31118 13.8123L3.18773 16.6888C3.39522 16.8963 3.66712 17 3.93905 17C4.21099 17 4.48289 16.8963 4.69037 16.6888C5.10528 16.2739 5.10528 15.6011 4.69037 15.1862L3.62761 14.1235H14.186C14.7728 14.1235 15.2485 13.6478 15.2485 13.061C15.2485 12.4742 14.7728 11.9984 14.186 11.9984Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <div className="flex flex-col items-end">
                                        <h1 className="text-white font-poppins text-xs">To</h1>
                                        <h1 className="text-white font-poppins text-lg font-medium">Tokyo (JPN)</h1>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-1 mb-2">
                                    <h1 className="text-white font-poppins text-xs font-light">Monday, 20 July 20</h1>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <h1 className="text-white font-poppins text-xs font-light">6 Passenger</h1>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <h1 className="text-white font-poppins text-xs font-light">Economy</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:justify-center md:items-center md:w-48 md:h-full">
                            <h1 className="font-poppins text-md lg:text-lg font-semibold text-white">Change Search</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto bg-slate-100 flex flex-col">
                <div className="flex mt-52 md:mt-56 justify-between lg:justify-normal items-start px-6 lg:px-0 lg:pl-2 lg:pr-6">
                    <div className="hidden lg:flex flex-col items-center lg:flex-row lg:justify-between lg:w-96">
                        <h1 className="font-poppins font-bold text-xl">Filter</h1>
                        <h1 className="font-poppins text-sm font-semibold text-main">Reset</h1>
                    </div>
                    <div className="flex justify-between w-full lg:pl-10">
                        <div className="lg:hidden" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 19" fill="none">
                                <path d="M22 2H10.4615M18.1538 9.69231H6.61538M14.3077 17.3846H2" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:gap-2">
                            <h1 className="font-poppins font-bold text-xl">Select Ticket</h1>
                            <h1 className="font-poppins text-sm text-gray-400">{`(${flightData.length} flight found)`}</h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 17" fill="none">
                            <g clipPath="url(#clip0_13936_944)">
                                <path
                                    d="M12.3094 16.6888L9.43287 13.8123C9.22539 13.6048 9.12166 13.3329 9.12166 13.0609C9.12166 12.789 9.22539 12.5171 9.43287 12.3096C9.84781 11.8947 10.5205 11.8947 10.9355 12.3096L11.9982 13.3724L11.9982 2.23291C11.9982 1.64611 12.4739 1.17041 13.0607 1.17041C13.6475 1.17041 14.1232 1.64611 14.1232 2.23291L14.1232 13.3724L15.1859 12.3096C15.6009 11.8947 16.2736 11.8947 16.6886 12.3096C17.1035 12.7246 17.1035 13.3973 16.6886 13.8123L13.812 16.6888C13.3971 17.1037 12.7243 17.1037 12.3094 16.6888ZM5.00132 14.186L5.00132 3.62761L6.06405 4.69037C6.47899 5.10528 7.15172 5.10528 7.56666 4.69037C7.9816 4.2754 7.9816 3.6027 7.56666 3.18773L4.69011 0.311179C4.27517 -0.103727 3.60244 -0.103727 3.1875 0.311179L0.310945 3.18773C0.10346 3.39522 -0.000267189 3.66712 -0.000267201 3.93905C-0.000267213 4.21099 0.10346 4.48289 0.310945 4.69037C0.725885 5.10528 1.39861 5.10528 1.81355 4.69037L2.87629 3.62761L2.87628 14.186C2.87628 14.7728 3.35199 15.2485 3.93878 15.2485C4.52558 15.2485 5.00132 14.7728 5.00132 14.186Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_13936_944">
                                    <rect width="17" height="17" fill="white" transform="translate(17) rotate(90)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto lg:flex">
                <div className="hidden lg:flex">
                    <div className=" bg-white w-72 left-0 py-4 px-6 rounded-xl mt-4">
                        <div className="">
                            <div className="border-b">
                                <button className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu" onClick={() => handleOpenDropdown(openTransit, setOpenTransit)}>
                                    <p className="font-poppins text-base font-semibold -z-50">Transit</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openTransit ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openTransit ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="direct">
                                                Direct
                                            </label>
                                            <input type="checkbox" name="" id="direct" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="transit">
                                                Transit
                                            </label>
                                            <input type="checkbox" name="" id="transit" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="transit2">
                                                Transit 2+
                                            </label>
                                            <input type="checkbox" name="" id="transit2" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openFacilities, setOpenFacilities)}
                                >
                                    <p className="text-base font-semibold font-poppins">Facilities</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openFacilities ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openFacilities ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="luggage">
                                                Luggage
                                            </label>
                                            <input type="checkbox" name="" id="luggage" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="meal">
                                                In-Flight Meal
                                            </label>
                                            <input type="checkbox" name="" id="meal" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="wifi">
                                                Wi-fi
                                            </label>
                                            <input type="checkbox" name="" id="wifi" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu" onClick={() => handleOpenDropdown(openDepTime, setOpenDepTime)}>
                                    <p className="text-base font-semibold font-poppins">Departure Time</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openDepTime ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openDepTime ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="0-6">
                                                00:00 - 06:00
                                            </label>
                                            <input type="checkbox" name="" id="0-6" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="6-12">
                                                06:00 - 12:00
                                            </label>
                                            <input type="checkbox" name="" id="6-12" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="12-18">
                                                12:00 - 18:00
                                            </label>
                                            <input type="checkbox" name="" id="12-18" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="18-24">
                                                18:00 - 24:00
                                            </label>
                                            <input type="checkbox" name="" id="18-24" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openAriveTime, setOpenAriveTime)}
                                >
                                    <p className="text-base font-semibold font-poppins">Time Arrived</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openAriveTime ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openAriveTime ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="0-6">
                                                00:00 - 06:00
                                            </label>
                                            <input type="checkbox" name="" id="0-6" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="6-12">
                                                06:00 - 12:00
                                            </label>
                                            <input type="checkbox" name="" id="6-12" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="12-18">
                                                12:00 - 18:00
                                            </label>
                                            <input type="checkbox" name="" id="12-18" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="18-24">
                                                18:00 - 24:00
                                            </label>
                                            <input type="checkbox" name="" id="18-24" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openAirlines, setOpenAirlines)}
                                >
                                    <p className="text-base font-semibold font-poppins">Airlines</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openAirlines ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openAirlines ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="garudaId">
                                                Garuda Indonesia
                                            </label>
                                            <input type="checkbox" name="" id="garudaId" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="airAsia">
                                                Air Asia
                                            </label>
                                            <input type="checkbox" name="" id="airAsia" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="lionAir">
                                                Lion Air
                                            </label>
                                            <input type="checkbox" name="" id="lionAir" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openTicketPrice, setOpenTicketPrice)}
                                >
                                    <p className="text-base font-semibold font-poppins">Ticket Price</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openTicketPrice ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openTicketPrice ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between">
                                            <p className="color-41 text-xs">Lowest</p>
                                            <p className="color-41 text-xs">Highest</p>
                                        </div>
                                        {openTicketPrice && (
                                            <RangeSlider
                                                min={0}
                                                max={1000}
                                                onChange={({ min, max }) => {
                                                    return { min, max };
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-full">
                    {isLoading ? (
                        <div className="flex flex-col justify-center items-center mt-32">
                            <Image src={airplaneLoading} alt="Loading" width={100} height={100} className="bg-slate-100" />
                            <p className="text-main ">Loading...</p>
                        </div>
                    ) : (
                        <div>
                            {flightData.map((flight, index) => (
                                <div key={index} className="bg-slate-100 flex flex-col px-6 py-2 pt-4">
                                    <div className="bg-white p-4 rounded-xl ">
                                        <div className="hidden md:flex items-center gap-2">
                                            <Image src={flight.photo} alt="ImageAirlines" className="" width={90} height={52} />
                                            <h1 className="hidden md:block font-poppins font-medium text-gray-500">{flight.name}</h1>
                                        </div>
                                        <div className="flex justify-between border-b-2 md:border-none  md:mt-4">
                                            <div className="md:hidden flex items-center gap-4">
                                                <Image src={flight.photo} alt="ImageAirlines" className="" width={90} height={52} />
                                                <h1 className="hidden md:block">{flight.name}</h1>
                                            </div>
                                            <div className="flex gap-3 items-center md:w-44 md:justify-between">
                                                <div>
                                                    <h1 className="font-poppins font-semibold text-lg">{flight.from.code}</h1>
                                                    <h1 className="text-gray-400 font-poppins text-xs">{flight.takeoffTime}</h1>
                                                </div>
                                                <div className=" mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                        <path
                                                            d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                                                            fill="#979797"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h1 className="font-poppins font-semibold text-lg">{flight.to.code}</h1>
                                                    <h1 className="text-gray-400 font-poppins text-xs">{flight.landingTime}</h1>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row-reverse w-20 md:w-full gap-1  md:justify-between md:items-center">
                                                <div className="bg-main hidden md:w-28 md:h-10 w-20 h-8 rounded-lg md:flex justify-center items-center hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50" onClick={handleSelect}>
                                                    <h1 className="text-white font-poppins font-medium text-sm">Select</h1>
                                                </div>
                                                <div className="flex flex-col items-end justify-center mt-1">
                                                    <h1 className="text-main font-poppins text-xs font-semibold">
                                                        $ 214,00 <span className="text-gray-400 font-normal">/pax</span>
                                                    </h1>
                                                </div>
                                                <div className=" hidden md:flex items-center gap-2">
                                                    {flight.facilities.includes("baggage") && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" className="block">
                                                            <path
                                                                d="M18.4167 6.49999H16.25V3.24999C16.25 2.65416 15.7625 2.16666 15.1667 2.16666H10.8334C10.2375 2.16666 9.75002 2.65416 9.75002 3.24999V6.49999H7.58335C6.39169 6.49999 5.41669 7.47499 5.41669 8.66666V20.5833C5.41669 21.775 6.39169 22.75 7.58335 22.75C7.58335 23.3458 8.07085 23.8333 8.66669 23.8333C9.26252 23.8333 9.75002 23.3458 9.75002 22.75H16.25C16.25 23.3458 16.7375 23.8333 17.3334 23.8333C17.9292 23.8333 18.4167 23.3458 18.4167 22.75C19.6084 22.75 20.5834 21.775 20.5834 20.5833V8.66666C20.5834 7.47499 19.6084 6.49999 18.4167 6.49999ZM10.2917 19.5H8.66669V9.74999H10.2917V19.5ZM13.8125 19.5H12.1875V9.74999H13.8125V19.5ZM14.625 6.49999H11.375V3.79166H14.625V6.49999ZM17.3334 19.5H15.7084V9.74999H17.3334V19.5Z"
                                                                fill="#979797"
                                                            />
                                                        </svg>
                                                    )}
                                                    {flight.facilities.includes("meal") && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 21" fill="none">
                                                            <path
                                                                d="M19.9375 10.5H2.0625C1.51549 10.5 0.990886 10.7371 0.604092 11.159C0.217298 11.581 0 12.1533 0 12.75C0 13.3467 0.217298 13.919 0.604092 14.341C0.990886 14.7629 1.51549 15 2.0625 15H19.9375C20.4845 15 21.0091 14.7629 21.3959 14.341C21.7827 13.919 22 13.3467 22 12.75C22 12.1533 21.7827 11.581 21.3959 11.159C21.0091 10.7371 20.4845 10.5 19.9375 10.5ZM20.625 16.5H1.375C1.19266 16.5 1.0178 16.579 0.888864 16.7197C0.759933 16.8603 0.6875 17.0511 0.6875 17.25V18C0.6875 18.7956 0.977231 19.5587 1.49296 20.1213C2.00868 20.6839 2.70815 21 3.4375 21H18.5625C19.2918 21 19.9913 20.6839 20.507 20.1213C21.0228 19.5587 21.3125 18.7956 21.3125 18V17.25C21.3125 17.0511 21.2401 16.8603 21.1111 16.7197C20.9822 16.579 20.8073 16.5 20.625 16.5ZM2.51969 9H19.4803C20.9657 9 21.8273 6.94219 20.9765 5.44312C19.25 2.4 15.4494 0.0046875 11 0C6.55102 0.0046875 2.75 2.4 1.02352 5.44266C0.171875 6.94172 1.03426 9 2.51969 9ZM16.5 3.75C16.636 3.75 16.7689 3.79399 16.882 3.8764C16.995 3.95881 17.0831 4.07594 17.1352 4.21299C17.1872 4.35003 17.2008 4.50083 17.1743 4.64632C17.1478 4.7918 17.0823 4.92544 16.9861 5.03033C16.89 5.13522 16.7675 5.20665 16.6341 5.23559C16.5008 5.26453 16.3625 5.24968 16.2369 5.19291C16.1113 5.13614 16.0039 5.04001 15.9284 4.91668C15.8528 4.79334 15.8125 4.64834 15.8125 4.5C15.8125 4.30109 15.8849 4.11032 16.0139 3.96967C16.1428 3.82902 16.3177 3.75 16.5 3.75ZM11 2.25C11.136 2.25 11.2689 2.29399 11.382 2.3764C11.495 2.45881 11.5831 2.57594 11.6352 2.71299C11.6872 2.85003 11.7008 3.00083 11.6743 3.14632C11.6478 3.2918 11.5823 3.42544 11.4861 3.53033C11.39 3.63522 11.2675 3.70665 11.1341 3.73559C11.0008 3.76453 10.8625 3.74968 10.7369 3.69291C10.6113 3.63614 10.5039 3.54001 10.4284 3.41668C10.3528 3.29334 10.3125 3.14834 10.3125 3C10.3125 2.80109 10.3849 2.61032 10.5139 2.46967C10.6428 2.32902 10.8177 2.25 11 2.25ZM5.5 3.75C5.63597 3.75 5.7689 3.79399 5.88195 3.8764C5.99501 3.95881 6.08313 4.07594 6.13517 4.21299C6.1872 4.35003 6.20082 4.50083 6.17429 4.64632C6.14776 4.7918 6.08228 4.92544 5.98614 5.03033C5.88999 5.13522 5.76749 5.20665 5.63412 5.23559C5.50076 5.26453 5.36253 5.24968 5.23691 5.19291C5.11128 5.13614 5.00391 5.04001 4.92836 4.91668C4.85282 4.79334 4.8125 4.64834 4.8125 4.5C4.8125 4.30109 4.88493 4.11032 5.01386 3.96967C5.1428 3.82902 5.31766 3.75 5.5 3.75Z"
                                                                fill="#979797"
                                                            />
                                                        </svg>
                                                    )}
                                                    {flight.facilities.includes("wifi") && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 18" fill="none">
                                                            <path
                                                                d="M21.825 4.93714C15.7348 -1.64692 6.26276 -1.64451 0.17494 4.93714C-0.053998 5.18464 -0.0584668 5.60371 0.162908 5.86045L1.33991 7.22531C1.55097 7.4704 1.8906 7.47563 2.10991 7.24058C7.12591 1.86951 14.8734 1.8683 19.8904 7.24058C20.1097 7.47563 20.4493 7.47 20.6604 7.22531L21.8374 5.86045C22.0584 5.60371 22.054 5.18464 21.825 4.93714ZM11 12.8571C9.78482 12.8571 8.79998 14.0083 8.79998 15.4286C8.79998 16.8489 9.78482 18 11 18C12.2151 18 13.2 16.8489 13.2 15.4286C13.2 14.0083 12.2151 12.8571 11 12.8571ZM17.9668 9.49862C14.0047 5.40321 7.99079 5.40763 4.03319 9.49862C3.796 9.74371 3.78844 10.1692 4.0136 10.4288L5.19747 11.7944C5.40372 12.0323 5.73579 12.0483 5.95544 11.8266C8.84123 8.9108 13.1653 8.91723 16.0442 11.8266C16.2638 12.0483 16.5959 12.0327 16.8021 11.7944L17.986 10.4288C18.2115 10.1692 18.2036 9.7433 17.9668 9.49862Z"
                                                                fill="#979797"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="flex flex-col items-center md:ml-4">
                                                    <h1 className="text-xs font-poppins text-center font-semibold text-gray-400">{flight.timeDistance}</h1>
                                                    <h1 className="text-xs font-poppins text-gray-400 mb-2 md:mb-0">{`${flight.transit} transit`}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center gap-2">
                                                <h1 className="text-xs font-semibold text-main font-poppins">View Details</h1>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 10" fill="none">
                                                    <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                                </svg>
                                            </div>
                                            <div className=" md:hidden flex items-center gap-2">
                                                {flight.facilities.includes("baggage") && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none" className="block">
                                                        <path
                                                            d="M18.4167 6.49999H16.25V3.24999C16.25 2.65416 15.7625 2.16666 15.1667 2.16666H10.8334C10.2375 2.16666 9.75002 2.65416 9.75002 3.24999V6.49999H7.58335C6.39169 6.49999 5.41669 7.47499 5.41669 8.66666V20.5833C5.41669 21.775 6.39169 22.75 7.58335 22.75C7.58335 23.3458 8.07085 23.8333 8.66669 23.8333C9.26252 23.8333 9.75002 23.3458 9.75002 22.75H16.25C16.25 23.3458 16.7375 23.8333 17.3334 23.8333C17.9292 23.8333 18.4167 23.3458 18.4167 22.75C19.6084 22.75 20.5834 21.775 20.5834 20.5833V8.66666C20.5834 7.47499 19.6084 6.49999 18.4167 6.49999ZM10.2917 19.5H8.66669V9.74999H10.2917V19.5ZM13.8125 19.5H12.1875V9.74999H13.8125V19.5ZM14.625 6.49999H11.375V3.79166H14.625V6.49999ZM17.3334 19.5H15.7084V9.74999H17.3334V19.5Z"
                                                            fill="#979797"
                                                        />
                                                    </svg>
                                                )}
                                                {flight.facilities.includes("meal") && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 21" fill="none">
                                                        <path
                                                            d="M19.9375 10.5H2.0625C1.51549 10.5 0.990886 10.7371 0.604092 11.159C0.217298 11.581 0 12.1533 0 12.75C0 13.3467 0.217298 13.919 0.604092 14.341C0.990886 14.7629 1.51549 15 2.0625 15H19.9375C20.4845 15 21.0091 14.7629 21.3959 14.341C21.7827 13.919 22 13.3467 22 12.75C22 12.1533 21.7827 11.581 21.3959 11.159C21.0091 10.7371 20.4845 10.5 19.9375 10.5ZM20.625 16.5H1.375C1.19266 16.5 1.0178 16.579 0.888864 16.7197C0.759933 16.8603 0.6875 17.0511 0.6875 17.25V18C0.6875 18.7956 0.977231 19.5587 1.49296 20.1213C2.00868 20.6839 2.70815 21 3.4375 21H18.5625C19.2918 21 19.9913 20.6839 20.507 20.1213C21.0228 19.5587 21.3125 18.7956 21.3125 18V17.25C21.3125 17.0511 21.2401 16.8603 21.1111 16.7197C20.9822 16.579 20.8073 16.5 20.625 16.5ZM2.51969 9H19.4803C20.9657 9 21.8273 6.94219 20.9765 5.44312C19.25 2.4 15.4494 0.0046875 11 0C6.55102 0.0046875 2.75 2.4 1.02352 5.44266C0.171875 6.94172 1.03426 9 2.51969 9ZM16.5 3.75C16.636 3.75 16.7689 3.79399 16.882 3.8764C16.995 3.95881 17.0831 4.07594 17.1352 4.21299C17.1872 4.35003 17.2008 4.50083 17.1743 4.64632C17.1478 4.7918 17.0823 4.92544 16.9861 5.03033C16.89 5.13522 16.7675 5.20665 16.6341 5.23559C16.5008 5.26453 16.3625 5.24968 16.2369 5.19291C16.1113 5.13614 16.0039 5.04001 15.9284 4.91668C15.8528 4.79334 15.8125 4.64834 15.8125 4.5C15.8125 4.30109 15.8849 4.11032 16.0139 3.96967C16.1428 3.82902 16.3177 3.75 16.5 3.75ZM11 2.25C11.136 2.25 11.2689 2.29399 11.382 2.3764C11.495 2.45881 11.5831 2.57594 11.6352 2.71299C11.6872 2.85003 11.7008 3.00083 11.6743 3.14632C11.6478 3.2918 11.5823 3.42544 11.4861 3.53033C11.39 3.63522 11.2675 3.70665 11.1341 3.73559C11.0008 3.76453 10.8625 3.74968 10.7369 3.69291C10.6113 3.63614 10.5039 3.54001 10.4284 3.41668C10.3528 3.29334 10.3125 3.14834 10.3125 3C10.3125 2.80109 10.3849 2.61032 10.5139 2.46967C10.6428 2.32902 10.8177 2.25 11 2.25ZM5.5 3.75C5.63597 3.75 5.7689 3.79399 5.88195 3.8764C5.99501 3.95881 6.08313 4.07594 6.13517 4.21299C6.1872 4.35003 6.20082 4.50083 6.17429 4.64632C6.14776 4.7918 6.08228 4.92544 5.98614 5.03033C5.88999 5.13522 5.76749 5.20665 5.63412 5.23559C5.50076 5.26453 5.36253 5.24968 5.23691 5.19291C5.11128 5.13614 5.00391 5.04001 4.92836 4.91668C4.85282 4.79334 4.8125 4.64834 4.8125 4.5C4.8125 4.30109 4.88493 4.11032 5.01386 3.96967C5.1428 3.82902 5.31766 3.75 5.5 3.75Z"
                                                            fill="#979797"
                                                        />
                                                    </svg>
                                                )}
                                                {flight.facilities.includes("wifi") && (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 18" fill="none">
                                                        <path
                                                            d="M21.825 4.93714C15.7348 -1.64692 6.26276 -1.64451 0.17494 4.93714C-0.053998 5.18464 -0.0584668 5.60371 0.162908 5.86045L1.33991 7.22531C1.55097 7.4704 1.8906 7.47563 2.10991 7.24058C7.12591 1.86951 14.8734 1.8683 19.8904 7.24058C20.1097 7.47563 20.4493 7.47 20.6604 7.22531L21.8374 5.86045C22.0584 5.60371 22.054 5.18464 21.825 4.93714ZM11 12.8571C9.78482 12.8571 8.79998 14.0083 8.79998 15.4286C8.79998 16.8489 9.78482 18 11 18C12.2151 18 13.2 16.8489 13.2 15.4286C13.2 14.0083 12.2151 12.8571 11 12.8571ZM17.9668 9.49862C14.0047 5.40321 7.99079 5.40763 4.03319 9.49862C3.796 9.74371 3.78844 10.1692 4.0136 10.4288L5.19747 11.7944C5.40372 12.0323 5.73579 12.0483 5.95544 11.8266C8.84123 8.9108 13.1653 8.91723 16.0442 11.8266C16.2638 12.0483 16.5959 12.0327 16.8021 11.7944L17.986 10.4288C18.2115 10.1692 18.2036 9.7433 17.9668 9.49862Z"
                                                            fill="#979797"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <div className="bg-main md:hidden w-20 h-8 rounded-lg flex justify-center items-center hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50" onClick={handleSelect}>
                                                <h1 className="text-white font-poppins font-medium text-sm">Select</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="lg:hidden z-50">
                <div
                    className={`fixed inset-0 bg-opacity-50 w-full top-48 md:top-52 transform transition-transform ${
                        isFilterOpen ? "translate-x-0 transition duration-500 ease-in-out" : "-translate-x-full transition duration-500 ease-in-out"
                    }`}
                >
                    <div className="absolute bg-white w-72 left-0 py-4 px-6 rounded-tr-2xl md:rounded-br-2xl mt-3 shadow-lg shadow-black/50">
                        <div className="flex justify-between h-10 items-center">
                            <div>
                                <h1 className="font-poppins text-xl font-semibold">Filter</h1>
                            </div>
                            <div className="transform scale-x-(-1)" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 19" fill="none">
                                    <path d="M2 2H13.5385M5.84615 9.69231H17.3846M9.69231 17.3846H22" stroke="#111111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="overflow-y-scroll h-custom1 py-5">
                            <div className="border-b">
                                <button className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu" onClick={() => handleOpenDropdown(openTransit, setOpenTransit)}>
                                    <p className="font-poppins text-base font-semibold">Transit</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openTransit ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openTransit ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="direct">
                                                Direct
                                            </label>
                                            <input type="checkbox" name="" id="direct" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="transit">
                                                Transit
                                            </label>
                                            <input type="checkbox" name="" id="transit" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm font-poppins" htmlFor="transit2">
                                                Transit 2+
                                            </label>
                                            <input type="checkbox" name="" id="transit2" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openFacilities, setOpenFacilities)}
                                >
                                    <p className="text-base font-semibold font-poppins">Facilities</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openFacilities ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openFacilities ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="luggage">
                                                Luggage
                                            </label>
                                            <input type="checkbox" name="" id="luggage" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="meal">
                                                In-Flight Meal
                                            </label>
                                            <input type="checkbox" name="" id="meal" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="wifi">
                                                Wi-fi
                                            </label>
                                            <input type="checkbox" name="" id="wifi" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu" onClick={() => handleOpenDropdown(openDepTime, setOpenDepTime)}>
                                    <p className="text-base font-semibold font-poppins">Departure Time</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openDepTime ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openDepTime ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="0-6">
                                                00:00 - 06:00
                                            </label>
                                            <input type="checkbox" name="" id="0-6" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="6-12">
                                                06:00 - 12:00
                                            </label>
                                            <input type="checkbox" name="" id="6-12" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="12-18">
                                                12:00 - 18:00
                                            </label>
                                            <input type="checkbox" name="" id="12-18" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="18-24">
                                                18:00 - 24:00
                                            </label>
                                            <input type="checkbox" name="" id="18-24" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openAriveTime, setOpenAriveTime)}
                                >
                                    <p className="text-base font-semibold font-poppins">Time Arrived</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openAriveTime ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openAriveTime ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="0-6">
                                                00:00 - 06:00
                                            </label>
                                            <input type="checkbox" name="" id="0-6" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="6-12">
                                                06:00 - 12:00
                                            </label>
                                            <input type="checkbox" name="" id="6-12" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="12-18">
                                                12:00 - 18:00
                                            </label>
                                            <input type="checkbox" name="" id="12-18" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="18-24">
                                                18:00 - 24:00
                                            </label>
                                            <input type="checkbox" name="" id="18-24" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openAirlines, setOpenAirlines)}
                                >
                                    <p className="text-base font-semibold font-poppins">Airlines</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openAirlines ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openAirlines ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="garudaId">
                                                Garuda Indonesia
                                            </label>
                                            <input type="checkbox" name="" id="garudaId" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="airAsia">
                                                Air Asia
                                            </label>
                                            <input type="checkbox" name="" id="airAsia" className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-row justify-between w-full items-center mb-5">
                                            <label className="text-sm" htmlFor="lionAir">
                                                Lion Air
                                            </label>
                                            <input type="checkbox" name="" id="lionAir" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b">
                                <button
                                    className="flex flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                    onClick={() => handleOpenDropdown(openTicketPrice, setOpenTicketPrice)}
                                >
                                    <p className="text-base font-semibold font-poppins">Ticket Price</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 18 10"
                                        fill="none"
                                        className={`${openTicketPrice ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                    >
                                        <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                    </svg>
                                </button>
                                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openTicketPrice ? "max-h-[100px]" : "max-h-0"}`}>
                                    <div className="flex flex-col">
                                        <div className="flex flex-row justify-between">
                                            <p className="color-41 text-xs">Lowest</p>
                                            <p className="color-41 text-xs">Highest</p>
                                        </div>
                                        {openTicketPrice && (
                                            <RangeSlider
                                                min={0}
                                                max={1000}
                                                onChange={({ min, max }) => {
                                                    return { min, max };
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex w-full bg-white ">
                <Footer />
            </div>
        </div>
    );
}

export default privateRoute(Search);
