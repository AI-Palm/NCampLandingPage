import React from 'react'
import Image from "next/image";
import FooterBG from "@/public/images/FooterBG.png";

const Footer = () => {
  return (
    <div className="relative ">
            <Image src={FooterBG} alt="banner" width={2000} height={1000} className="w-screen" />
            <div className='flex flex-col '>
            <h1 className="absolute w-1/2 top-1/2 left-1/2 pt-1 transform -translate-x-1/2 -translate-y-1/5 z-10 text-white text-center font-bold text-xss sm:text-xs sm:mt-2  md:text-xs md:mt-2 lg:text-lg xl:text-xl xl:mt-5">
                <span className="block">교육에 대한 진심과 IT에 대한 열정 그리고</span>
                <span className="block">직장인이 아닌 개발인을 양성하고자 하는 마음만큼은</span>
                <span className="block">어떤 교육기관보다도 으뜸이라 생각합니다.</span>
                <span className="block">취업만이 목표가 아니라 성장하고픈 개발자가 되고 싶다면</span>
                <span className="block">지원 부탁드립니다!</span>


                
            </h1>
            </div>
        </div>
  )
}

export default Footer