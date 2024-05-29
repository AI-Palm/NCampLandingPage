import React from 'react';
import Image from "next/image";
import HeaderBG from "@/public/images/HeaderBG.png";
import AWSLogo from "@/public/icons/aws-logo.png";

const Header = () => {
    return (
        <div className="relative w-full sm:h-[657px] h-[320px]"> 
            <Image 
                src={HeaderBG} 
                alt="Header Background" 
                layout="fill" 
                objectFit="cover" 
                quality={100}
                className="z-0"
            />
            <div className='relative flex flex-col items-center   h-full z-10'>
                <Image 
                    src={AWSLogo} 
                    alt="aws logo"  
                    className="sm:mt-[162px] mt-[78.9px] sm:w-[217px] w-[105.7px] "
                />
                <div className="flex flex-col text-center text-white font-[700px] text-subtitle sm:text-title font-rokaf sm:mt-[48px] mt-[16.32px]">
                    <p>클라우드기반 <span className='sm:block hidden'><br /></span> <br /> 자바 풀스택 웹 개발 과정 </p>
                   
                  
                </div>
            </div>
        </div>
    )
}

export default Header;
