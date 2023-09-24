"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../../../../components/Navbar";
import Footer from "../../../../../components/Footer";
import { privateRoute } from "../../../../../utils/privateRoute";
import paypal from "../../../../../../public/image/LogoPaypal.svg";
import visa from "../../../../../../public/image/logovisa.png";
import mastercard from "../../../../../../public/image/logomc.png";
import stripe from "../../../../../../public/image/logostripe.png";

function Payment() {
    const router = useRouter();
    const params = useParams();
    const code = params.code;
    const [loading, setLoading] = useState(false);

    const handleConfirm = async () => {
        console.log("Confirm button clicked");
        try {
            setLoading(true);
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}booking/status/${code}`, { statusId: 2 });
            if (response.status === 200) {
                router.push(`/search/details/payment/pass/${code}`);
            } else {
                console.error("Failed to confirm payment.");
            }
        } catch (error) {
            console.error("Error confirming payment:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = async () => {
        try {
            const confirmationResult = await Swal.fire({
                title: "Confirm",
                text: "Are you sure you want to cancel the payment?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#F24545",
                cancelButtonColor: "#979797",
                confirmButtonText: "Yes, cancel",
            });

            if (confirmationResult.isConfirmed) {
                setLoading(true);

                const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}booking/status/${code}`, { statusId: 3 });

                if (response.status === 200) {
                    await Swal.fire("Canceled", "Your payment has been canceled.", "success");
                    router.push(`/profile`);
                } else {
                    console.error("Failed to cancel payment.");
                }
            }
        } catch (error) {
            console.error("Error canceling payment:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-main flex justify-center items-center lg:h-screen">
                <div className="bg-white w-[20rem] md:w-[40rem] mt-32 lg:mt-32 mb-12 flex flex-col lg:flex-row lg:w-[60rem] lg:gap-4 lg:justify-between p-4">
                    <div className="lg:w-1/2">
                        <h1 className="text-lg font-poppins text-abu font-semibold mb-2">Payment Method</h1>
                        <div>
                            <div className="bg-slate-100 h-12 flex justify-between items-center px-4">
                                <h1 className="font-poppins text-abu font-semibold text-lg">Paypal</h1>
                                <Image src={paypal} alt="paypal" width={20} />
                            </div>
                            <div className="bg-slate-100 h-12 flex justify-between items-center px-4">
                                <h1 className="font-poppins text-abu font-semibold text-lg">Credit Card</h1>
                                <div className="flex gap-2">
                                    <Image src={mastercard} alt="mc" width={30} />
                                    <Image src={visa} alt="visa" width={30} />
                                    <Image src={stripe} alt="stripe" width={30} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="px-4">
                                <h1 className="font-poppins text-abu font-semibold text-sm">Card Number</h1>
                                <div className="flex border-2 border-gray-300 items-center px-2 rounded-lg gap-2 h-12 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" fill="none">
                                        <path
                                            d="M0 4C0 3.46957 0.210714 2.96086 0.585786 2.58579C0.960859 2.21071 1.46957 2 2 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V12C16 12.5304 15.7893 13.0391 15.4142 13.4142C15.0391 13.7893 14.5304 14 14 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V4ZM2 3C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V5H15V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H2ZM15 7H1V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V7Z"
                                            fill="#979797"
                                        />
                                        <path
                                            d="M2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4C4.26522 9 4.51957 9.10536 4.70711 9.29289C4.89464 9.48043 5 9.73478 5 10V11C5 11.2652 4.89464 11.5196 4.70711 11.7071C4.51957 11.8946 4.26522 12 4 12H3C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11V10Z"
                                            fill="#979797"
                                        />
                                    </svg>
                                    <input type="text" className="w-full focus:outline-none h-full font-poppins font-semibold text-md" placeholder="0000 0000 0000 0000" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex">
                            <div className="px-4">
                                <h1 className="font-poppins text-abu font-semibold text-sm">Expiry Date</h1>
                                <div className="flex border-2 border-gray-300 items-center px-2 rounded-lg gap-2 h-12 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 22" fill="none">
                                        <g clipPath="url(#clip0_322_672)">
                                            <path
                                                d="M1.53846 20H5V16.5385H1.53846V20ZM5.76923 20H9.61538V16.5385H5.76923V20ZM1.53846 15.7692H5V11.9231H1.53846V15.7692ZM5.76923 15.7692H9.61538V11.9231H5.76923V15.7692ZM1.53846 11.1538H5V7.69231H1.53846V11.1538ZM10.3846 20H14.2308V16.5385H10.3846V20ZM5.76923 11.1538H9.61538V7.69231H5.76923V11.1538ZM15 20H18.4615V16.5385H15V20ZM10.3846 15.7692H14.2308V11.9231H10.3846V15.7692ZM6.15385 5.38462V1.92308C6.15385 1.81891 6.11579 1.72877 6.03966 1.65264C5.96354 1.57652 5.8734 1.53846 5.76923 1.53846H5C4.89583 1.53846 4.80569 1.57652 4.72957 1.65264C4.65345 1.72877 4.61538 1.81891 4.61538 1.92308V5.38462C4.61538 5.48878 4.65345 5.57893 4.72957 5.65505C4.80569 5.73117 4.89583 5.76923 5 5.76923H5.76923C5.8734 5.76923 5.96354 5.73117 6.03966 5.65505C6.11579 5.57893 6.15385 5.48878 6.15385 5.38462ZM15 15.7692H18.4615V11.9231H15V15.7692ZM10.3846 11.1538H14.2308V7.69231H10.3846V11.1538ZM15 11.1538H18.4615V7.69231H15V11.1538ZM15.3846 5.38462V1.92308C15.3846 1.81891 15.3466 1.72877 15.2704 1.65264C15.1943 1.57652 15.1042 1.53846 15 1.53846H14.2308C14.1266 1.53846 14.0365 1.57652 13.9603 1.65264C13.8842 1.72877 13.8462 1.81891 13.8462 1.92308V5.38462C13.8462 5.48878 13.8842 5.57893 13.9603 5.65505C14.0365 5.73117 14.1266 5.76923 14.2308 5.76923H15C15.1042 5.76923 15.1943 5.73117 15.2704 5.65505C15.3466 5.57893 15.3846 5.48878 15.3846 5.38462ZM20 4.61538V20C20 20.4167 19.8478 20.7772 19.5433 21.0817C19.2388 21.3862 18.8782 21.5385 18.4615 21.5385H1.53846C1.12179 21.5385 0.761218 21.3862 0.456731 21.0817C0.152244 20.7772 0 20.4167 0 20V4.61538C0 4.19872 0.152244 3.83814 0.456731 3.53365C0.761218 3.22917 1.12179 3.07692 1.53846 3.07692H3.07692V1.92308C3.07692 1.39423 3.26522 0.941506 3.64183 0.564904C4.01843 0.188301 4.47115 0 5 0H5.76923C6.29808 0 6.7508 0.188301 7.1274 0.564904C7.50401 0.941506 7.69231 1.39423 7.69231 1.92308V3.07692H12.3077V1.92308C12.3077 1.39423 12.496 0.941506 12.8726 0.564904C13.2492 0.188301 13.7019 0 14.2308 0H15C15.5288 0 15.9816 0.188301 16.3582 0.564904C16.7348 0.941506 16.9231 1.39423 16.9231 1.92308V3.07692H18.4615C18.8782 3.07692 19.2388 3.22917 19.5433 3.53365C19.8478 3.83814 20 4.19872 20 4.61538Z"
                                                fill="#979797"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_322_672">
                                                <rect width="20" height="21.5385" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <input type="text" className="w-full focus:outline-none h-full font-poppins font-semibold text-md" placeholder="MM/YY" maxLength={5} />
                                </div>
                            </div>
                            <div className="px-4">
                                <h1 className="font-poppins text-abu font-semibold text-sm">CVC/CVV</h1>
                                <div className="flex border-2 border-gray-300 items-center px-2 rounded-lg gap-2 h-12 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M16.3437 9.08984H15.4336V5.45313C15.4336 2.44141 12.9922 0 9.98047 0C6.96875 0 4.52734 2.44141 4.52734 5.45313V9.08984H3.61719C3.11719 9.08984 2.70703 9.49609 2.70703 10V19.0898C2.70703 19.5938 3.11328 20 3.61719 20H16.3437C16.8437 20 17.2539 19.5938 17.2539 19.0898V10C17.2539 9.49609 16.8437 9.08984 16.3437 9.08984ZM13.6172 9.08984H6.34375V5.45313C6.34375 3.44531 7.97266 1.81641 9.98047 1.81641C11.9883 1.81641 13.6172 3.44531 13.6172 5.45313V9.08984Z"
                                            fill="#979797"
                                        />
                                    </svg>
                                    <input type="text" className="w-full focus:outline-none h-full font-poppins font-semibold text-md" placeholder="000" maxLength={3} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 px-4 flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M16.3437 9.08984H15.4336V5.45313C15.4336 2.44141 12.9922 0 9.98047 0C6.96875 0 4.52734 2.44141 4.52734 5.45313V9.08984H3.61719C3.11719 9.08984 2.70703 9.49609 2.70703 10V19.0898C2.70703 19.5938 3.11328 20 3.61719 20H16.3437C16.8437 20 17.2539 19.5938 17.2539 19.0898V10C17.2539 9.49609 16.8437 9.08984 16.3437 9.08984ZM13.6172 9.08984H6.34375V5.45313C6.34375 3.44531 7.97266 1.81641 9.98047 1.81641C11.9883 1.81641 13.6172 3.44531 13.6172 5.45313V9.08984Z"
                                    fill="#979797"
                                />
                            </svg>
                            <h1 className="text-xs font-poppins font-medium text-gray-400">Your transaction is secured with ssl certificate</h1>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:w-1/2">
                        <h1 className="text-lg font-poppins text-abu font-semibold mb-2">Summary</h1>
                        <div>
                            <div className="border-b h-12 flex justify-between items-center px-4">
                                <div>
                                    <select name="title" className=" focus:outline-none font-poppins font-semibold text-xs md:text-base bg-white outline-none border-none">
                                        <option value={"Pro(Billed Monthly)"}>Pro(Billed Monthly)</option>
                                        <option value={"Base"}>Base</option>
                                    </select>
                                    <h1 className="font-poppins text-main text-[8px] md:text-xs my-1 underline ">Save 20% with annual billing</h1>
                                </div>
                                <h1 className="font-poppins text-lg font-semibold text-abu">
                                    $99.9<span className="text-xs">/Month</span>
                                </h1>
                            </div>
                            <div className="border-b h-12 flex justify-between items-center px-4">
                                <div>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">Refferal Bonouses</h1>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">Vat</h1>
                                </div>
                                <div>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">-$2.0</h1>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">-20%</h1>
                                </div>
                            </div>
                            <div className="border-b h-12 flex justify-between items-center px-4">
                                <div>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">Today you pay(US Dollars)</h1>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm">After 30 days $9.59</h1>
                                </div>
                                <div>
                                    <h1 className="font-poppins font-semibold text-xs md:text-base">$0</h1>
                                    <h1 className="font-poppins font-semibold text-xs md:text-sm"></h1>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex w-full md:w-60 h-14  bg-main items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50 mt-6" onClick={handleConfirm}>
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
                                        <h1 className="text-white text-sm font-medium">Confirm</h1>
                                    )}
                                </div>
                                <div className="font-poppins text-red-400 text-sm underline mt-4 font-medium text-center cursor-pointer" onClick={handleCancel}>
                                    Cancel?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default privateRoute(Payment);
