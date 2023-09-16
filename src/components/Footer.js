import React from "react";
import ankasa from "../../public/image/IconAnkasa.svg";
import playstore from "../../public/image/playstore.png";
import appstore from "../../public/image/appstore.png";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="container mx-auto mt-2">
                <div className=" w-full h-96 md:h-56 flex px-6 md:mb-6">
                    <div className="w-full h-64 md:flex  md:h-56 md:justify-between ">
                        <div className="md:w-64 lg:w-80">
                            <div className="flex items-center mt-5 md:mt-6">
                                <Image src={ankasa} alt="ankasa" />
                                <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                            </div>
                            <div className="w-full mt-5 flex flex-col justify-between md:h-32">
                                <h1 className="text-abu font-poppins">Find your Flight and explore the world with us. We will take care of the rest.</h1>
                                <div className="hidden md:block md:mt-4">
                                    <h1 className="font-poppins text-sm md:text-base text-abu">
                                        © Ankasa. <br /> All Rights Reserved.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className=" flex mt-8 md:mt-8">
                            <div className=" w-1/2 md:w-1/3">
                                <h1 className="font-poppins text-black font-semibold mb-3 md:mb-7 text-sm">Features</h1>
                                <h1 className="font-poppins text-abu mt-2 text-sm md:text-base md:mt-3">Find Ticket</h1>
                                <h1 className="font-poppins text-abu mt-2 text-sm md:text-base md:mt-3">My Booking</h1>
                                <h1 className="font-poppins text-abu mt-2 text-sm md:text-base md:mt-3">Chat</h1>
                                <h1 className="font-poppins text-abu mt-2 text-sm md:text-base md:mt-3">Notification</h1>
                            </div>
                            <div className=" w-1/2 md:w-2/3 md:ml-6 lg:ml-20 ">
                                <h1 className="font-poppins text-center text-black font-semibold mb-3 md:mb-7 text-sm">Download Ankasa app</h1>
                                <Image src={appstore} className="w-full mb-2 md:mb-4" alt="appstore" />
                                <Image src={playstore} className="w-full" alt="playstore" />
                            </div>
                        </div>
                        <div className=" flex mt-5 md:mt-8">
                            <div className=" w-1/2 md:hidden">
                                <h1 className="font-poppins text-sm">
                                    © Ankasa. <br /> All Rights Reserved.
                                </h1>
                            </div>
                            <div className=" w-1/2 flex items-center justify-between md:w-full md:flex-col md:items-start">
                                <div className="">
                                    <h1 className="hidden md:block font-poppins text-center md:text-start text-black font-semibold mb-3 md:mb-7 text-sm">Follow us</h1>
                                    <div className="flex justify-between md:items-start  w-40 md:w-28 lg:w-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M17.5 6.5H17.51" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12002 4 3.40002 4.46C2.92927 4.59318 2.502 4.84824 2.16137 5.19941C1.82074 5.55057 1.57881 5.98541 1.46002 6.46C1.14524 8.20556 0.991258 9.97631 1.00002 11.75C0.988802 13.537 1.14279 15.3213 1.46002 17.08C1.59098 17.5398 1.83833 17.9581 2.17817 18.2945C2.518 18.6308 2.93884 18.8738 3.40002 19C5.12002 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42V6.42Z"
                                                stroke="#595959"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z" stroke="#595959" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="hidden md:flex md:w-24 lg:w-40">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                            stroke="#595959"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                            stroke="#595959"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <h1 className="text-sm ml-2 text-abu lg:mb-3">Jakarta, Indonesia</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
