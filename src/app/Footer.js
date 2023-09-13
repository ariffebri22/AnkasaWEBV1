import React from "react";
import ankasa from "../../public/image/IconAnkasa.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <div className="bg-orange-200 w-full h-96 flex px-6">
                    <div className="w-1/2 h-64">
                        <div className="flex items-center mt-5">
                            <Image src={ankasa} alt="ankasa" />
                            <h1 className="font-poppins font-bold text-abu text-lg ml-1">Ankasa</h1>
                        </div>
                        <div className="w-full h-52 mt-5 flex flex-col justify-between">
                            <h1 className="text-abu ">Find your Flight and explore the world with us. We will take care of the rest</h1>
                            <h1 className="text-abu">
                                © Ankasa. <br />
                                All Rights Reserved.
                            </h1>
                        </div>
                    </div>
                    <div className="w-1/2 h-64">
                        <h1>Features</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
