import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Japan from "../../public/image/ImageMain.png";
import Spain from "../../public/image/spain.png";
import Jakarta from "../../public/image/jakarta.png";
import Cianjur from "../../public/image/cianjur.png";
import Bali from "../../public/image/bali.png";
import back from "../../public/image/btnback.svg";
import backwhite from "../../public/image/btnbackwhite.svg";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-20 sm:flex sm:justify-between sm:items-center">
                <div className="px-5 sm:px-0 mt-5 md:mt-32">
                    <h1 className="font-poppins text-4xl font-semibold text-abu sm:ml-10 md:ml-28">
                        Find your <span className="text-main">Flight</span>
                    </h1>
                    <h1 className="font-poppins text-abu text-sm sm:text-base mt-4 sm:ml-10 sm:mb-20 md:ml-28">and explore the world with us</h1>
                    <div className="relative hidden sm:flex sm:rounded-r-3xl sm:max-w-lg md:max-w-3xl  sm:h-96 mt-5 sm:object-right overflow-hidden -z-20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <Image src={Japan} alt="japan" className="w-full h-full object-cover rounded-r-3xl" />
                    </div>
                </div>
                <div className=" flex justify-end sm:flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="171.43" viewBox="0 0 232 246" fill="none" className="mr-10 mt-9 -rotate-12 sm:hidden -z-50">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                    <div className="relative overflow-hidden rounded-l-3xl w-64 h-40 sm:w-72 sm:h-80 md:w-80 sm:ml-10 -z-50 ">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <Image src={Japan} alt="japan" className=" rounded-l-3xl w-64 h-40 object-cover mt-5 md:mt-0 sm:w-72 sm:h-80 md:w-96 sm:object-left" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="171.43" viewBox="0 0 232 246" fill="none" className="hidden mr-8 mt-20 sm:mt-4 -rotate-12 sm:flex sm:ml-20 md:hidden">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="171.43" viewBox="0 0 232 246" fill="none" className="hidden mr-8 mt-20 sm:mt-4 -rotate-12 sm:ml-20 md:flex md:mt-12 -z-20">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                            fill="#2395FF"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col mt-6 md:mt-20 lg:mt-32">
                <div class="container mx-auto flex justify-between items-end px-6">
                    <div>
                        <h1 className="font-poppins text-main font-semibold text-sm tracking-wild">TRENDING</h1>
                        <h1 className="font-poppins text-black text-2xl font-semibold">Trending destinations</h1>
                    </div>
                    <div>
                        <h1 className="font-poppins text-sm text-main font-medium">View all</h1>
                    </div>
                </div>
                <div class="container flex mt-10 mx-auto justify-center px-6 gap-4 md:gap-20 lg:gap-4 relative">
                    <div className="w-48 h-64 bg-slate-300 rounded-3xl overflow-hidden relative">
                        <div className=" absolute bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col justify-between py-4">
                            <div className="px-5">
                                <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                                    <h1 className="font-poppins text-white font-normal text-sm">
                                        <span className="text-white font-bold font-poppins">15</span> Airlines
                                    </h1>
                                </div>
                            </div>
                            <div className="flex w-full justify-between px-5 items-center">
                                <div className="">
                                    <h1 className="text-poppins text-xs text-white font-medium">Tokyo,</h1>
                                    <h1 className="text-poppins text-xl font-semibold text-white ">Japan</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <circle cx="14.5" cy="14.7703" r="14.5" fill="white" fill-opacity="0.17" />
                                    <path d="M12.3435 9.67674L16.0228 13.3561C16.8039 14.1371 16.8039 15.4034 16.0228 16.1845L12.3435 19.8638" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <Image src={Japan} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="hidden md:block w-48 h-64 bg-slate-300 rounded-3xl overflow-hidden relative">
                        <div className=" absolute bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col justify-between py-4">
                            <div className="px-5">
                                <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                                    <h1 className="font-poppins text-white font-normal text-sm">
                                        <span className="text-white font-bold font-poppins">22</span> Airlines
                                    </h1>
                                </div>
                            </div>
                            <div className="flex w-full justify-between px-5 items-center">
                                <div className="">
                                    <h1 className="text-poppins text-xs text-white font-medium">Barcelona,</h1>
                                    <h1 className="text-poppins text-xl font-semibold text-white ">Spain</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <circle cx="14.5" cy="14.7703" r="14.5" fill="white" fill-opacity="0.17" />
                                    <path d="M12.3435 9.67674L16.0228 13.3561C16.8039 14.1371 16.8039 15.4034 16.0228 16.1845L12.3435 19.8638" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <Image src={Spain} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="hidden md:block w-48 h-64 bg-slate-300 rounded-3xl overflow-hidden relative">
                        <div className=" absolute bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col justify-between py-4">
                            <div className="px-5">
                                <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                                    <h1 className="font-poppins text-white font-normal text-sm">
                                        <span className="text-white font-bold font-poppins">9</span> Airlines
                                    </h1>
                                </div>
                            </div>
                            <div className="flex w-full justify-between px-5 items-center">
                                <div className="">
                                    <h1 className="text-poppins text-xs text-white font-medium">Jakarta,</h1>
                                    <h1 className="text-poppins text-xl font-semibold text-white ">Indonesia</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <circle cx="14.5" cy="14.7703" r="14.5" fill="white" fill-opacity="0.17" />
                                    <path d="M12.3435 9.67674L16.0228 13.3561C16.8039 14.1371 16.8039 15.4034 16.0228 16.1845L12.3435 19.8638" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <Image src={Jakarta} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="hidden lg:block w-48 h-64 bg-slate-300 rounded-3xl overflow-hidden relative">
                        <div className=" absolute bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col justify-between py-4">
                            <div className="px-5">
                                <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                                    <h1 className="font-poppins text-white font-normal text-sm">
                                        <span className="text-white font-bold font-poppins">2</span> Airlines
                                    </h1>
                                </div>
                            </div>
                            <div className="flex w-full justify-between px-5 items-center">
                                <div className="">
                                    <h1 className="text-poppins text-xs text-white font-medium">Cianjur,</h1>
                                    <h1 className="text-poppins text-xl font-semibold text-white ">Indonesia</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <circle cx="14.5" cy="14.7703" r="14.5" fill="white" fill-opacity="0.17" />
                                    <path d="M12.3435 9.67674L16.0228 13.3561C16.8039 14.1371 16.8039 15.4034 16.0228 16.1845L12.3435 19.8638" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <Image src={Cianjur} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="hidden lg:block w-48 h-64 bg-slate-300 rounded-3xl overflow-hidden relative">
                        <div className=" absolute bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col justify-between py-4">
                            <div className="px-5">
                                <div className="bg-slate-300 bg-opacity-80 w-24 px-2 py-1 rounded-full flex justify-center">
                                    <h1 className="font-poppins text-white font-normal text-sm">
                                        <span className="text-white font-bold font-poppins">31</span> Airlines
                                    </h1>
                                </div>
                            </div>
                            <div className="flex w-full justify-between px-5 items-center">
                                <div className="">
                                    <h1 className="text-poppins text-xs text-white font-medium">Bali,</h1>
                                    <h1 className="text-poppins text-xl font-semibold text-white ">Indonesia</h1>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                                    <circle cx="14.5" cy="14.7703" r="14.5" fill="white" fill-opacity="0.17" />
                                    <path d="M12.3435 9.67674L16.0228 13.3561C16.8039 14.1371 16.8039 15.4034 16.0228 16.1845L12.3435 19.8638" stroke="white" stroke-width="2" />
                                </svg>
                            </div>
                        </div>
                        <Image src={Bali} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="absolute right-10 md:-right-6 top-7 -z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="188" height="210" viewBox="0 0 188 210" fill="none">
                            <rect width="136" height="174" rx="20" transform="matrix(-1 0 0 1 188 18)" fill="#C4C4C4" fill-opacity="0.65" />
                            <rect width="166" height="210" rx="20" transform="matrix(-1 0 0 1 166 0)" fill="#737373" fill-opacity="0.65" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-6">
                <div className=" bg-main w-full h-80 md:h-96 lg:h-height lg:flex lg:flex-col lg:justify-center md:px-12 mt-20 rounded-3xl overflow-hidden relative">
                    <div className="mt-5 flex flex-col items-center justify-center lg:mt-14 lg:mb-8">
                        <h1 className="font-poppins text-white font-light tracking-widest">Top 10</h1>
                        <h1 className="font-poppins text-white font-semibold text-xl">Top 10 destinations</h1>
                    </div>
                    <div className=" flex justify-between mt-6 px-2">
                        <div className="md:hidden flex justify-center items-center mb-12">
                            <div className="border-4 border-white w-16 h-12 flex justify-center items-center rounded-lg">
                                <Image src={backwhite} width={15} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center z-10">
                            <div className="bg-main border-white border-8 w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src={Cianjur} className="rounded-full w-32 h-32" />
                            </div>
                            <h1 className="text-center mt-6 text-white font-medium text-lg">CIANJUR</h1>
                        </div>
                        <div className="hidden md:flex flex-col justify-center z-10">
                            <div className="bg-main border-white border-8 w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src={Bali} className="rounded-full w-32 h-32" />
                            </div>
                            <h1 className="text-center mt-6 text-white font-medium text-lg">BALI</h1>
                        </div>
                        <div className="hidden md:flex flex-col justify-center z-10">
                            <div className="bg-main border-white border-8 w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src={Japan} className="rounded-full w-32 h-32 object-cover object-center" />
                            </div>
                            <h1 className="text-center mt-6 text-white font-medium text-lg">TOKYO</h1>
                        </div>
                        <div className="hidden lg:flex flex-col justify-center ">
                            <div className="bg-main border-white border-8 w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src={Spain} className="rounded-full w-32 h-32" />
                            </div>
                            <h1 className="text-center mt-6 text-white font-medium text-lg">BARCELONA</h1>
                        </div>
                        <div className="hidden lg:flex flex-col justify-center ">
                            <div className="bg-main border-white border-8 w-40 h-40 rounded-full flex justify-center items-center">
                                <Image src={Cianjur} className="rounded-full w-32 h-32" />
                            </div>
                            <h1 className="text-center mt-6 text-white font-medium text-lg">CIANJUR</h1>
                        </div>
                        <div className="md:hidden flex justify-center items-center mb-12">
                            <div className="border-4 border-white bg-white w-16 h-12 flex justify-center items-center rounded-lg">
                                <Image src={back} width={15} />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center gap-10 mt-5 lg:mt-10 ">
                        <div className="hidden md:flex justify-center items-center mb-10">
                            <div className="border-4 border-white w-16 h-12 flex justify-center items-center rounded-lg">
                                <Image src={backwhite} width={15} />
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center items-center mb-10">
                            <div className="border-4 border-white bg-white w-16 h-12 flex justify-center items-center rounded-lg">
                                <Image src={back} width={15} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-32 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="342" viewBox="0 0 500 342" fill="none">
                            <path
                                d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                fill="#41A4FF"
                            />
                        </svg>
                    </div>
                    <div className="hidden absolute -bottom-8 left-0 md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="420" height="342" viewBox="0 0 500 342" fill="none">
                            <path
                                d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                fill="#41A4FF"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
