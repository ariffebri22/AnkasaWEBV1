import Head from "next/head";
import Image from "next/image";
import Navbar from "./Navbar";
import Japan from "../../public/image/ImageMain.png";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-20 sm:flex sm:justify-between sm:items-center">
                <div className="px-5 sm:px-0 mt-5 md:mt-32">
                    <h1 className="font-poppins text-4xl font-semibold text-abu sm:ml-10 md:ml-28">
                        Find your <span className="text-blue-500">Flight</span>
                    </h1>
                    <h1 className="font-poppins text-abu text-sm sm:text-base mt-4 sm:ml-10 sm:mb-10 md:ml-28">and explore the world with us</h1>
                    <Image src={Japan} alt="japan" className=" hidden sm:flex sm:rounded-r-3xl sm:max-w-lg md:max-w-2xl sm:h-80 object-cover mt-5 sm:object-right" />
                </div>
                <div className=" flex justify-end sm:flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="171.43" viewBox="0 0 232 246" fill="none" className="mr-8 mt-20 -rotate-12 sm:hidden">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                    <Image src={Japan} alt="japan" className=" rounded-l-3xl w-64 h-40 object-cover mt-5 sm:w-72 sm:h-80 md:w-96 sm:object-left sm:ml-10" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="171.43" viewBox="0 0 232 246" fill="none" className="hidden mr-8 mt-20 sm:mt-4 -rotate-12 sm:flex sm:ml-20 md:hidden">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="171.43" viewBox="0 0 232 246" fill="none" className="hidden mr-8 mt-20 sm:mt-4 -rotate-12 sm:ml-20 md:flex md:mt-12">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
}
