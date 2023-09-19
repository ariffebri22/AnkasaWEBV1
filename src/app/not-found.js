"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import illustrasi from "../../public/image/illustrationankasa.svg";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    const handleBack = () => {
        router.push("/");
    };

    return (
        <>
            <div className="h-screen flex justify-center items-center flex-col">
                <div className="flex justify-center items-center">
                    <h1 className="font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-main font-semibold text-[8rem] md:text-[12rem]">4</h1>
                    <Image src={illustrasi} alt="404" className="w-28 md:w-40" />
                    <h1 className="font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-main font-semibold text-[8rem] md:text-[12rem]">4</h1>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-main font-semibold text-[2rem] mt-0">Oops !</h1>
                    <h1 className="font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-main font-semibold text-xl mt-0">{`It looks like you're lost.`}</h1>
                </div>
                <div className="flex w-32 h-10  bg-main items-center justify-center rounded-md hover:bg-blue-600 cursor-pointer shadow-lg shadow-blue-500/50 mt-4" onClick={handleBack}>
                    <Link href="/" className="text-white text-sm font-medium">
                        Back to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
