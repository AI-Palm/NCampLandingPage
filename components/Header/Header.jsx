import React from 'react';
import Image from "next/image";
import HeaderBG from "@/public/images/HeaderBG.png";
import AWSLogo from "@/public/icons/aws-logo.png";

const Header = () => {
    return (
        <div className="relative ">
            <Image src={HeaderBG} alt="banner" width={2000} height={1000} className="w-screen" />
            <div className='flex flex-col '>
            <Image src={AWSLogo} alt="aws logo"  height={133} className="absolute mt-2  top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-20 w-24  sm:w-28 md:w-32 lg:w-48 xl:w-56" />
            <h1 className="absolute top-1/2 left-1/2 header-content transform -translate-x-1/2 -translate-y-1/5 z-10 text-white text-center font-bold text-sm sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                <span className="block">클라우드기반</span>
                <span className="block">자바 풀스택 웹 개발 과정</span>
            </h1>
            </div>
        </div>
    )
}

export default Header;
