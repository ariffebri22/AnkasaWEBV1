"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { privateRoute } from "../../../../utils/privateRoute";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import countryData from "../../../../data/countryData";

const token = Cookies.get("token");

function Details() {
    const router = useRouter();
    const params = useParams();
    const code = params.code;
    const [isFlightPayment, setIsFlightPayment] = useState(true);
    const [isPassenger, setIsPassenger] = useState(true);
    const [insurance, setInsurance] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCountry1, setSelectedCountry1] = useState("Indonesia");
    const [selectedCountry2, setSelectedCountry2] = useState("Indonesia");
    const [isFlightData, setIsFlightData] = useState([]);
    const [contactPerson, setContactPerson] = useState({
        title1: "Mr.",
        fullname1: "",
        nationality1: "",
    });
    const [passengerDetails, setPassengerDetails] = useState({
        title2: "",
        fullname2: "",
        nationality2: "",
    });

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}airlines/flight/${code}`)
            .then((response) => {
                const data = response.data.data;

                const flight = data;
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
                    ...flight,
                    takeoffTime,
                    landingTime,
                    takeoffDate: formattedTakeoffDate,
                    landingDate: formattedLandingDate,
                    timeDistance: formattedTimeDistance,
                };

                setIsFlightData(modifiedData);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const handleProceed = () => {
        let isValid = true;
        setLoading(true);

        if (!contactPerson.fullname1 || !selectedCountry1) {
            Swal.fire("Please fill in all fields", "To continue, please fill in all fields correctly", "warning");
            isValid = false;
            console.log("di data 1");
            console.log(contactPerson.fullname1);
            console.log(selectedCountry1);
            setLoading(false);
        }

        if (isPassenger && (!passengerDetails.title2 || !passengerDetails.fullname2 || !selectedCountry2)) {
            Swal.fire("Please fill in all fields", "To continue, please fill in all fields correctly", "warning");
            isValid = false;
            console.log("di data 2");
            setLoading(false);
        }

        if (isValid) {
            const postData = {
                title1: contactPerson.title1,
                fullname1: contactPerson.fullname1,
                nationality1: selectedCountry1,
                title2: isPassenger ? passengerDetails.title2 : contactPerson.title1,
                fullname2: isPassenger ? passengerDetails.fullname2 : contactPerson.fullname1,
                nationality2: isPassenger ? selectedCountry2 : selectedCountry1,
            };

            axios
                .post(`${process.env.NEXT_PUBLIC_API_URL}booking/tickets/${code}`, postData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log("Response from API:", response.data);

                    const responseData = response.data.data;
                    const responseCode = responseData.code;

                    if (responseCode) {
                        setTimeout(() => {
                            router.push(`/search/details/payment/${responseCode}`);
                            setLoading(false);
                        }, 2000);
                    } else {
                        console.error("API response does not contain code.");
                    }
                })
                .catch((error) => {
                    console.error("Error sending data to API:", error);
                    setLoading(false);
                });
        }
    };

    // console.log(isFlightData);

    const handleCountryChange1 = (event) => {
        setSelectedCountry1(event.target.value);
    };

    const handleCountryChange2 = (event) => {
        setSelectedCountry2(event.target.value);
    };

    const handleOpenDropdown = (state, setState) => {
        setState(!state);
    };

    const handlePassenger = () => {
        if (isPassenger) {
            setIsPassenger(false);
        } else {
            setIsPassenger(true);
        }
    };

    const handleInsurance = () => {
        if (insurance) {
            setInsurance(false);
        } else {
            setInsurance(true);
        }
    };

    const handleSelect = () => {
        router.push(`/search/details/payment/${code}`);
    };

    return (
        <>
            <Navbar />
            <div className="mt-16 bg-bgcolor relative">
                <div className="mt-10 md:px-0 flex flex-col gap-4 md:flex-row z-10 relative">
                    <div className="w-full bg-main h-32 md:h-40 absolute -z-10 rounded-b-2xl lg:rounded-b-3xl">
                        <div className="hidden left-0 z-10 lg:z-20 lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 500 342" fill="none">
                                <path
                                    d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                    fill="#41A4FF"
                                />
                            </svg>
                        </div>
                        <div className=" -bottom-6 left-0 z-10 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 500 342" fill="none">
                                <path
                                    d="M62.9307 330.279C67.8369 337.583 74.7274 341.727 81.9382 341.716L183.921 341.524C191.969 341.509 199.901 338.904 207.076 333.92L434.385 176.244C455.275 161.753 474.001 141.067 486.743 113.974C501.047 83.5606 502.602 61.5511 496.954 46.0024C491.321 30.443 477.626 19.0164 451.447 16.6884C428.127 14.6166 404.932 23.0104 384.042 37.4912L307.082 90.8757L136.226 3.24345C134.172 1.35174 131.785 0.244441 129.313 0.0360434C126.841 -0.172354 124.373 0.525715 122.164 2.05807L70.7977 37.6941C62.462 43.4714 60.4464 58.6784 66.7588 68.1614L188.803 172.923L108.172 228.86L51.6497 189.913C49.7023 188.571 47.5514 187.874 45.3706 187.878C43.1898 187.881 41.0401 188.586 39.0952 189.935L7.74426 211.688C-0.411833 217.348 -2.56023 232.106 3.39278 241.675L62.9307 330.279Z"
                                    fill="#41A4FF"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="md:ml-6 md:w-2/3">
                        <div className="mt-8 mx-6 md:mx-0">
                            <div className="flex justify-between items-center  ">
                                <h1 className="text-xl font-poppins font-semibold text-white">Contact Person Details</h1>
                            </div>
                            <div className="w-full bg-white rounded-xl mt-4 p-4">
                                <div className="border-b-4 border-b-gray-200 mt-4">
                                    <label htmlFor="name" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full h-10 focus:outline-none p-4 font-poppins font-semibold text-md"
                                        placeholder="Fullname"
                                        value={contactPerson.fullname1}
                                        onChange={(e) => setContactPerson({ ...contactPerson, fullname1: e.target.value })}
                                    />
                                </div>
                                <div className="border-b-4 border-b-gray-200 mt-4">
                                    <label htmlFor="email" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Email
                                    </label>
                                    <input type="email" name="email" className="w-full h-10 focus:outline-none p-4 font-poppins font-semibold text-md " placeholder="Email" />
                                </div>
                                <div className="border-b-4 border-b-gray-200 mt-4">
                                    <label htmlFor="country1" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Country
                                    </label>
                                    <select name="country1" className="w-full focus:outline-none p-4 font-poppins font-semibold text-md bg-white outline-none border-none" value={selectedCountry1} onChange={handleCountryChange1}>
                                        {countryData.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="w-full bg-red-100 h-10 mt-4 flex justify-center md:justify-start px-4 items-center gap-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M22.3993 20.0625L12.6493 3.1875C12.504 2.93672 12.2532 2.8125 12.0001 2.8125C11.747 2.8125 11.4939 2.93672 11.3509 3.1875L1.60089 20.0625C1.31261 20.5641 1.67354 21.1875 2.25011 21.1875H21.7501C22.3267 21.1875 22.6876 20.5641 22.3993 20.0625ZM11.2501 9.75C11.2501 9.64687 11.3345 9.5625 11.4376 9.5625H12.5626C12.6657 9.5625 12.7501 9.64687 12.7501 9.75V14.0625C12.7501 14.1656 12.6657 14.25 12.5626 14.25H11.4376C11.3345 14.25 11.2501 14.1656 11.2501 14.0625V9.75ZM12.0001 18C11.7057 17.994 11.4254 17.8728 11.2193 17.6625C11.0133 17.4522 10.8978 17.1695 10.8978 16.875C10.8978 16.5805 11.0133 16.2978 11.2193 16.0875C11.4254 15.8772 11.7057 15.756 12.0001 15.75C12.2945 15.756 12.5748 15.8772 12.7809 16.0875C12.987 16.2978 13.1024 16.5805 13.1024 16.875C13.1024 17.1695 12.987 17.4522 12.7809 17.6625C12.5748 17.8728 12.2945 17.994 12.0001 18Z"
                                            fill="#F24545"
                                        />
                                    </svg>
                                    <h1 className="text-gray-500 text-xs font-poppins font-medium">Make sure the customer data is correct.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mx-6 md:mx-0">
                            <div className="flex justify-between items-center  ">
                                <h1 className="text-xl font-poppins font-semibold ">Passenger Details</h1>
                            </div>
                            <div className="w-full bg-white rounded-xl mt-4 p-4">
                                <div className="w-full bg-gray-100 h-10 mt-4 flex justify-between items-center gap-2 rounded-lg p-2">
                                    <h1 className="text-gray-500 text-xs font-poppins font-medium">Passenger : 1 Adult</h1>
                                    <div className="flex items-center">
                                        <h1 className="text-gray-500 text-xs font-poppins font-medium w-24 md:w-40">Same as contact person</h1>
                                        <div className={`w-16 h-8  rounded-full p-1 flex item-center transition-background ${isPassenger ? "bg-blue-300 justify-end" : "bg-gray-300 justify-start"}`}>
                                            <div className={`w-6 h-6 cursor-pointer rounded-full shadow-md shadow-black/50 transition-background ${isPassenger ? "bg-main" : "bg-white"}`} onClick={handlePassenger}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b-4 border-b-gray-200 mt-4 flex flex-col">
                                    <label htmlFor="title" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Title
                                    </label>
                                    <select
                                        name="title"
                                        className="w-24 focus:outline-none p-4 font-poppins font-semibold text-md bg-white outline-none border-none"
                                        disabled={isPassenger}
                                        value={passengerDetails.title2}
                                        onChange={(e) => setPassengerDetails({ ...passengerDetails, title2: e.target.value })}
                                    >
                                        <option value={"Mr."}>Mr.</option>
                                        <option value={"Ms."}>Ms.</option>
                                    </select>
                                </div>
                                <div className="border-b-4 border-b-gray-200 mt-4">
                                    <label htmlFor="name" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full h-10 focus:outline-none p-4 font-poppins font-semibold text-md"
                                        placeholder="Fullname"
                                        disabled={isPassenger}
                                        value={passengerDetails.fullname2}
                                        onChange={(e) => setPassengerDetails({ ...passengerDetails, fullname2: e.target.value })}
                                    />
                                </div>
                                <div className="border-b-4 border-b-gray-200 mt-4 flex flex-col">
                                    <label htmlFor="country" className="pl-4 text-gray-400 font-poppins font-medium">
                                        Country
                                    </label>
                                    <select
                                        name="country"
                                        className="w-full focus:outline-none p-4 font-poppins font-semibold text-md bg-white outline-none border-none"
                                        value={selectedCountry2}
                                        onChange={handleCountryChange2}
                                        disabled={isPassenger}
                                    >
                                        {countryData.map((country) => (
                                            <option key={country.code} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mx-6 md:mx-0">
                            <div className="flex justify-between items-center  ">
                                <h1 className="text-xl font-poppins font-semibold ">Passenger Details</h1>
                            </div>
                            <div className="w-full bg-white rounded-xl mt-4 p-4">
                                <div className="flex w-full justify-between items-center border-b pb-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="insurance"
                                            id="insurance"
                                            className=" form-checkbox h-4 w-4 accent-main text-blue-600 border-blue-400 transition duration-150 ease-in-out rounded-lg"
                                            onClick={handleInsurance}
                                        />
                                        <label htmlFor="insurance" className="text-base font-poppins font-medium">
                                            Travel Insurance
                                        </label>
                                    </div>
                                    <h1 className="text-base text-main font-semibold font-poppins">
                                        $ 2,00<span className="text-gray-400">/pax</span>
                                    </h1>
                                </div>
                                <div className="mt-4">
                                    <h1 className="text-sm font-poppins font-semibold">Get travel compensation up to $ 10.000,00</h1>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center">
                            <div className="flex w-full md:w-60 h-14  bg-main items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50 my-6" onClick={handleProceed} disabled={loading}>
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
                                    <h1 className="text-white text-sm font-medium">Proceed to Payment</h1>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="md:mr-6 md:w-1/3">
                        <div className="mt-6 md:mt-8 mx-6 md:mx-0">
                            <div className="flex justify-between items-center  ">
                                <h1 className="text-xl font-poppins font-semibold md:text-white">Flight Details</h1>
                                <h1 className="text-sm font-poppins md:text-white">View Details</h1>
                            </div>
                            <div className="w-full bg-white rounded-xl mt-4 p-4">
                                <div className="">
                                    <div className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isFlightPayment ? "max-h-[300px]" : "max-h-0"}`}>
                                        <div className="flex items-center gap-2">
                                            <Image src={isFlightData.photo} alt="GarudaIndonesia" width={90} height={60} />
                                            <h1 className="font-poppins font-medium text-abu">{isFlightData.name}</h1>
                                        </div>
                                        {isFlightData && isFlightData.from && isFlightData.to && (
                                            <div className="flex gap-3 mt-4 items-center md:w-48 lg:w-72 md:justify-between">
                                                <h1 className="font-poppins font-semibold text-md">{isFlightData.from.location}</h1>
                                                <div className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                        <path
                                                            d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                                                            fill="#979797"
                                                        />
                                                    </svg>
                                                </div>
                                                <h1 className="font-poppins font-semibold text-md">{isFlightData.to.location}</h1>
                                            </div>
                                        )}
                                        <div className="flex gap-2 items-center mt-4 mb-2">
                                            <h1 className=" font-poppins text-xs font-base text-gray-500">{isFlightData.takeoffDate}</h1>
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                            <h1 className=" font-poppins text-xs font-base text-gray-500">{`${isFlightData.takeoffTime} - ${isFlightData.landingTime}`}</h1>
                                        </div>
                                        <div className="mt-4 mb-2">
                                            <div className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <circle cx="10" cy="10" r="9.25" fill="white" stroke="#2395FF" strokeWidth="1.5" />
                                                    <path
                                                        d="M14.4238 7.20523C14.1553 6.93171 13.72 6.93159 13.4513 7.20486L8.43755 12.3097L6.17367 10.0047C5.90503 9.73141 5.46966 9.73157 5.20122 10.0051C4.93278 10.2786 4.93295 10.7219 5.20159 10.9952L7.95151 13.795C8.21999 14.0683 8.65516 14.0683 8.9236 13.795L14.4234 8.19533C14.692 7.92202 14.6922 7.47875 14.4238 7.20523Z"
                                                        fill="#2395FF"
                                                    />
                                                </svg>
                                                <h1 className="text-main font-poppins font-medium text-sm">Refundable</h1>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <circle cx="10" cy="10" r="9.25" fill="white" stroke="#2395FF" strokeWidth="1.5" />
                                                    <path
                                                        d="M14.4238 7.20523C14.1553 6.93171 13.72 6.93159 13.4513 7.20486L8.43755 12.3097L6.17367 10.0047C5.90503 9.73141 5.46966 9.73157 5.20122 10.0051C4.93278 10.2786 4.93295 10.7219 5.20159 10.9952L7.95151 13.795C8.21999 14.0683 8.65516 14.0683 8.9236 13.795L14.4234 8.19533C14.692 7.92202 14.6922 7.47875 14.4238 7.20523Z"
                                                        fill="#2395FF"
                                                    />
                                                </svg>
                                                <h1 className="text-main font-poppins font-medium text-sm">Can reschedule</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="flex border-t flex-row justify-between items-center w-full py-5 pr-[3px] transition-transform duration-500 ease-in-out transform-gpu"
                                        onClick={() => handleOpenDropdown(isFlightPayment, setIsFlightPayment)}
                                    >
                                        <p className="font-poppins text-base font-semibold -z-50">Total Payment</p>
                                        <div className="flex items-center gap-2">
                                            <h1 className="text-main font-poppins font-semibold text-lg">
                                                {!isPassenger ? `$ ${insurance ? isFlightData.price * 2 + 2 : isFlightData.price * 2},00` : `$ ${insurance ? isFlightData.price + 2 : isFlightData.price},00`}
                                            </h1>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="15"
                                                viewBox="0 0 18 10"
                                                fill="none"
                                                className={`${isFlightPayment ? "rotate-180" : "rotate-0"} transform transition-transform duration-500 ease-in-out`}
                                            >
                                                <path d="M16 1.07107L9.58769 7.43757C9.19577 7.82669 8.56034 7.82669 8.16841 7.43757L1.75609 1.07107" stroke="#2395FF" strokeWidth="3" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="md:hidden flex w-full md:w-60 h-14  bg-main items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50 my-6" onClick={handleProceed} disabled={loading}>
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
                                    <h1 className="text-white text-sm font-medium">Proceed to Payment</h1>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default privateRoute(Details);
