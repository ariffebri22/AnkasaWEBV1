"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../../../../components/Navbar";
import Footer from "../../../../../../components/Footer";
import { privateRoute } from "../../../../../../utils/privateRoute";
import GarudaIndo from "../../../../../../../public/image/maskapaigarudaindo.png";
import QrCode from "../../../../../../../public/image/qrcode.png";

const token = Cookies.get("token");

function Pass() {
    const router = useRouter();
    const params = useParams();
    const code = params.code;
    const [tab, setTab] = useState(false);
    const [dataTicket, setDataTicket] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}booking/tickets/${code}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const data = response.data.data;
                // console.log(data);

                const flight = data.result.ticket;
                const takeoffTime = flight.takeoff.substr(11, 5);
                const landingTime = flight.landing.substr(11, 5);
                const takeoffDate = flight.takeoff.substr(0, 10);
                const landingDate = flight.landing.substr(0, 10);

                const takeoffHour = parseInt(takeoffTime.split(":")[0]);
                const takeoffMinute = parseInt(takeoffTime.split(":")[1]);
                const landingHour = parseInt(landingTime.split(":")[0]);
                const landingMinute = parseInt(landingTime.split(":")[1]);

                const hours = landingHour - takeoffHour;
                const minutes = landingMinute - takeoffMinute;

                const formattedTimeDistance = `${hours} hours ${minutes} minutes`;

                const takeoffDateTime = new Date(takeoffDate);
                const landingDateTime = new Date(landingDate);
                const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
                const formattedTakeoffDate = takeoffDateTime.toLocaleDateString("en-US", options);
                const formattedLandingDate = landingDateTime.toLocaleDateString("en-US", options);

                const modifiedData = {
                    ...data,
                    takeoffTime,
                    landingTime,
                    takeoffDate: formattedTakeoffDate,
                    landingDate: formattedLandingDate,
                    timeDistance: formattedTimeDistance,
                };

                setDataTicket(modifiedData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    }, []);

    console.log(dataTicket);

    const dataClass = () => {
        const price = dataTicket?.result?.ticket?.price;
        let result = "";

        if (price <= 200) {
            return (result = "Economy");
        } else if (price >= 200) {
            return (result = "Business");
        } else if (price >= 500) {
            return (result = "First Class");
        }
    };

    const handleTab = () => {
        if (tab) {
            setTab(false);
        } else {
            setTab(true);
        }
    };

    const handleBack = () => {
        router.push("/");
    };

    return (
        <>
            <Navbar />
            <div className="md:h-screen bg-main flex justify-center items-center">
                <div className="bg-white w-full md:w-[46rem] md:h-[25rem] h-64 mt-32 mb-14 mx-2 rounded-2xl p-4 md:p-8">
                    <div className="flex justify-between items-center md:mb-4">
                        <h1 className="font-poppins text-lg font-bold md:text-2xl">Booking Pass</h1>
                        <button className="flex flex-col gap-1" onClick={handleTab}>
                            <div className="bg-main w-1 h-1 rounded-full"></div>
                            <div className="bg-main w-1 h-1 rounded-full"></div>
                            <div className="bg-main w-1 h-1 rounded-full"></div>
                        </button>
                    </div>
                    {tab && (
                        <div className="bg-white w-36 rounded-lg py-2 px-4 right-6 fixed md:right-16 lg:right-72 z-50 shadow-lg shadow-black/50 md:flex flex-col items-center">
                            <button className=" w-full flex items-center h-10  mt=4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15" fill="none">
                                    <g clipPath="url(#clip0_323_676)">
                                        <path
                                            d="M3 1.5C3 1.10218 3.15804 0.720644 3.43934 0.43934C3.72064 0.158035 4.10218 0 4.5 0L10.5 0C10.8978 0 11.2794 0.158035 11.5607 0.43934C11.842 0.720644 12 1.10218 12 1.5V5H3V1.5ZM1.5 6C1.10218 6 0.720644 6.15804 0.43934 6.43934C0.158035 6.72064 0 7.10218 0 7.5L0 11.5C0 11.8978 0.158035 12.2794 0.43934 12.5607C0.720644 12.842 1.10218 13 1.5 13H2V9H13V13H13.5C13.8978 13 14.2794 12.842 14.5607 12.5607C14.842 12.2794 15 11.8978 15 11.5V7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6H1.5Z"
                                            fill="#979797"
                                        />
                                        <path d="M3 10H12V15H3V10Z" fill="#979797" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_323_676">
                                            <rect width="15" height="15" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 className="font-poppins text-lg font-medium ml-6 text-abu">Print</h1>
                            </button>
                            <button className=" w-full flex items-center h-10  mt=4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.2 16.4 13.0793 16.104 12.838 15.862C12.5967 15.62 12.3007 15.4993 11.95 15.5C11.6 15.5 11.3043 15.621 11.063 15.863C10.8217 16.105 10.7007 16.4007 10.7 16.75C10.7 17.1 10.821 17.396 11.063 17.638C11.305 17.88 11.6007 18.0007 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9627 13.1667 13.088 12.85C13.2133 12.5333 13.5673 12.1 14.15 11.55C14.5833 11.1167 14.925 10.704 15.175 10.312C15.425 9.92 15.55 9.44933 15.55 8.9C15.55 7.96667 15.2083 7.25 14.525 6.75C13.8417 6.25 13.0333 6 12.1 6C11.15 6 10.379 6.25 9.787 6.75C9.195 7.25 8.78267 7.85 8.55 8.55L10.2 9.2C10.2833 8.9 10.471 8.575 10.763 8.225C11.055 7.875 11.5007 7.7 12.1 7.7C12.6333 7.7 13.0333 7.846 13.3 8.138C13.5667 8.43 13.7 8.75067 13.7 9.1C13.7 9.43333 13.6 9.746 13.4 10.038C13.2 10.33 12.95 10.6007 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z"
                                        fill="#979797"
                                    />
                                </svg>
                                <h1 className="font-poppins text-lg font-medium ml-6 text-abu">Help</h1>
                            </button>
                            <button className=" w-full flex items-center h-10  mt=4" onClick={handleBack}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.0007 2.00089C10.0009 1.79234 9.93586 1.58895 9.81473 1.41918C9.6936 1.24942 9.52242 1.12177 9.32515 1.0541C9.12789 0.986434 8.9144 0.982136 8.71456 1.04181C8.51473 1.10148 8.33856 1.22214 8.21069 1.38689L1.21069 10.3869C1.07414 10.5624 1 10.7785 1 11.0009C1 11.2233 1.07414 11.4394 1.21069 11.6149L8.21069 20.6149C8.33856 20.7797 8.51473 20.9003 8.71456 20.96C8.9144 21.0197 9.12789 21.0154 9.32515 20.9477C9.52242 20.88 9.6936 20.7524 9.81473 20.5826C9.93586 20.4128 10.0009 20.2094 10.0007 20.0009V16.0109C15.3797 16.1229 17.9637 17.1439 19.2617 18.2539C20.4957 19.3089 20.7217 20.5499 20.9567 21.8499L21.0177 22.1849C21.0626 22.4246 21.1935 22.6397 21.3858 22.7896C21.5782 22.9395 21.8187 23.014 22.0621 22.999C22.3055 22.984 22.535 22.8806 22.7075 22.7082C22.88 22.5358 22.9836 22.3063 22.9987 22.0629C23.1697 19.3149 22.9127 15.3329 20.9717 12.0019C19.0877 8.76889 15.6947 6.28289 10.0007 6.02289V2.00089Z"
                                        fill="#979797"
                                    />
                                </svg>
                                <h1 className="font-poppins text-lg font-medium ml-6 text-abu">Back </h1>
                            </button>
                        </div>
                    )}
                    <div className="w-full h-48 md:h-[18rem] border-gray-300 border-2 rounded-xl mt-2 md:p-4 p-2 flex">
                        <div className="w-2/3 mr-2">
                            <div className="flex justify-between md:w-96">
                                <Image src={dataTicket?.result?.ticket?.airline?.photo} width={60} height={30} alt="GarudaIndo" className="md:hidden" />
                                <Image src={dataTicket?.result?.ticket?.airline?.photo} width={120} height={60} alt="GarudaIndo" className="hidden md:block" />
                                <div className="flex items-center justify-between  w-full px-2 md:ml-8">
                                    <h1 className="font-poppins font-bold md:text-2xl">{dataTicket?.result?.ticket?.from?.code}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" className="md:hidden">
                                        <path
                                            d="M17.5497 14.7334H0.450071C0.201451 14.7334 7.9948e-05 14.9869 7.9948e-05 15.3V16.4333C7.9948e-05 16.7464 0.201451 17 0.450071 17H17.5497C17.7984 17 17.9997 16.7464 17.9997 16.4333V15.3C17.9997 14.9869 17.7984 14.7334 17.5497 14.7334ZM2.26551 10.9534C2.44213 11.1957 2.69019 11.3331 2.94977 11.3327L6.62114 11.3263C6.91088 11.3258 7.19645 11.2395 7.45475 11.0742L15.6378 5.84498C16.3899 5.36438 17.064 4.67837 17.5227 3.77987C18.0377 2.77121 18.0937 2.04129 17.8903 1.52563C17.6876 1.00962 17.1945 0.630663 16.2521 0.553455C15.4126 0.484748 14.5776 0.763119 13.8255 1.24336L11.055 3.01381L4.90414 0.107566C4.83019 0.0448293 4.74427 0.00810666 4.65527 0.00119535C4.56627 -0.00571596 4.47742 0.0174349 4.3979 0.0682542L2.54872 1.25009C2.24863 1.44169 2.17607 1.94602 2.40332 2.26051L6.79692 5.73484L3.89419 7.58993L1.85939 6.29831C1.78928 6.2538 1.71185 6.23067 1.63334 6.23079C1.55483 6.23092 1.47744 6.25429 1.40743 6.29902L0.278793 7.02044C-0.014826 7.20815 -0.0921683 7.6976 0.12214 8.01493L2.26551 10.9534Z"
                                            fill="#979797"
                                        />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 17" fill="none" className="hidden md:block">
                                        <path
                                            d="M17.5497 14.7334H0.450071C0.201451 14.7334 7.9948e-05 14.9869 7.9948e-05 15.3V16.4333C7.9948e-05 16.7464 0.201451 17 0.450071 17H17.5497C17.7984 17 17.9997 16.7464 17.9997 16.4333V15.3C17.9997 14.9869 17.7984 14.7334 17.5497 14.7334ZM2.26551 10.9534C2.44213 11.1957 2.69019 11.3331 2.94977 11.3327L6.62114 11.3263C6.91088 11.3258 7.19645 11.2395 7.45475 11.0742L15.6378 5.84498C16.3899 5.36438 17.064 4.67837 17.5227 3.77987C18.0377 2.77121 18.0937 2.04129 17.8903 1.52563C17.6876 1.00962 17.1945 0.630663 16.2521 0.553455C15.4126 0.484748 14.5776 0.763119 13.8255 1.24336L11.055 3.01381L4.90414 0.107566C4.83019 0.0448293 4.74427 0.00810666 4.65527 0.00119535C4.56627 -0.00571596 4.47742 0.0174349 4.3979 0.0682542L2.54872 1.25009C2.24863 1.44169 2.17607 1.94602 2.40332 2.26051L6.79692 5.73484L3.89419 7.58993L1.85939 6.29831C1.78928 6.2538 1.71185 6.23067 1.63334 6.23079C1.55483 6.23092 1.47744 6.25429 1.40743 6.29902L0.278793 7.02044C-0.014826 7.20815 -0.0921683 7.6976 0.12214 8.01493L2.26551 10.9534Z"
                                            fill="#979797"
                                        />
                                    </svg>
                                    <h1 className="font-poppins font-bold md:text-2xl">{dataTicket?.result?.ticket?.to?.code}</h1>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2 md:w-72">
                                <div>
                                    <h1 className="text-xs font-poppins text-gray-400 md:text-base ">Code</h1>
                                    <h1 className="text-sm font-poppins text-abu font-medium md:text-lg">{`${dataTicket?.result?.ticket?.from?.code.substr(0, 2)}-${dataTicket?.result?.id}`}</h1>
                                </div>
                                <div>
                                    <h1 className="text-xs font-poppins text-gray-400 md:text-base ">Class</h1>
                                    <h1 className="text-sm font-poppins text-abu font-medium md:text-lg">{dataClass()}</h1>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 md:w-72">
                                <div className="w-1/2">
                                    <h1 className="text-xs font-poppins text-gray-400 md:text-base ">Terminal</h1>
                                    <h1 className="text-sm font-poppins text-abu font-medium md:text-lg">{dataTicket?.result?.ticket?.from?.terminal}</h1>
                                </div>
                                <div className=" w-1/2 flex flex-col items-end mr-8 md:mr-10">
                                    <h1 className="text-xs font-poppins text-gray-400 md:text-base ">Gate</h1>
                                    <h1 className="text-sm font-poppins text-abu font-medium md:text-lg mr-3 md:mr-4">{dataTicket?.result?.id}</h1>
                                </div>
                            </div>
                            <div className="mt-1">
                                <h1 className="text-xs font-poppins text-gray-400 md:text-base ">Departure</h1>
                                <h1 className="text-xs font-poppins text-abu font-medium md:text-lg">{`${dataTicket.takeoffDate} - ${dataTicket.takeoffTime}`}</h1>
                            </div>
                        </div>
                        <div className="w-1/3 border-l-2 border-dashed border-gray-300">
                            <div className="flex h-full items-center relative">
                                <div className="flex flex-col gap-1 items-center justify-center h-full ml-4 md:ml-14">
                                    <Image src={QrCode} width={50} alt="QrCode" className="md:hidden" />
                                    <Image src={QrCode} width={50} alt="QrCode" className="md:hidden" />
                                    <Image src={QrCode} width={50} alt="QrCode" className="md:hidden" />
                                    <Image src={QrCode} width={80} alt="QrCode" className="hidden md:block" />
                                    <Image src={QrCode} width={80} alt="QrCode" className="hidden md:block" />
                                    <Image src={QrCode} width={80} alt="QrCode" className="hidden md:block" />
                                </div>
                                <h1 className="absolute -rotate-90 font-poppins text-[10px]  w-44 md:w-56 text-center mr-8 md:ml-10 md:text-sm">1234 5678 90AS 6543 21CV</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default privateRoute(Pass);
