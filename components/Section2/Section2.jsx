"use client";
import React from 'react';
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import useInViewXAxisAnimation from "@/components/useInViewXAxisAnimation";




const Section2 = () => {
    const containerRef = useRef();

    const { ref: skillRef, controls: isSkillRefInView } = useInViewXAxisAnimation();


    return (
        <>
        <div className="bg-black h-full my-60 flex justify-center items-center  font-[400px]" ref={containerRef}>
            <motion.div 
                initial={{opacity: 0, y: "200px" }}
                animate={{opacity: isSkillRefInView ? 1 : 0, y: isSkillRefInView ? 0 : 20   }}
                transition={{ delay: 0 }}
                className="flex flex-col md:flex-row justify-center items-center">
                <div className=" w-[330px] h-[256px] bg-white/[.1] border-2 border-white rounded-[30px] px-[22px]  m-4 text-white flex flex-col  md:w-[350px] md:h-[347px] "  ref={skillRef}>
                    <h1 className="md:text-subtitle text-description  font-appleB00 text-[#F90] mt-[31px] md:mt-[43px] mb-[7px] md:mb-[27px] text-left">
                        교육일정
                    </h1>
                    <ul className="font-appleR00 md:ml-20 md:mb-[17px] mb-[5px] text-base  md:text-xl">
                        <li className='flex md:mb-[17px] mb-[8px] '><span className='md:hidden mr-[36px]'>수강일정</span><span >24.05.28 ~ 24.11.07</span></li>
                        <li className='flex '><span className='md:hidden mr-[36px] '>교육시간</span><span>평일 09:30 ~ 18:00<br/>(스터디 진행시 22:00까지)</span></li>
                    </ul>
                    <ul className="font-appleR00 ml-4 list-disc text-base lg:text-xl md:text-xl">
                        <li>실전프로젝트 기반 중심 수업</li>
                        <li>훈련장려금 지원</li>
                        <li>수강료 :<span className='line-through decoration-[#F90]'>6,473,520원</span>  → 0원</li>
                    </ul>
                </div>
                <div className=" w-[330px] h-[256px] bg-white/[.1] border-2 border-white rounded-[30px] px-[22px]  m-4 text-white flex flex-col  md:w-[350px] md:h-[347px] "  ref={skillRef}>
 
                    <h1 className="md:text-subtitle text-description  font-appleB00 text-[#F90] mt-[31px] md:mt-[43px] mb-[2px] md:mb-[27px] text-left">

                        교육지원
                    </h1>
                    <ul className="md:ml-8 ml-4 font-appleR00 list-disc text-base md:text-step">
                        <li>수료 후 6개월간 취업 지원</li>
                        <li>특강 및 멘토링 진행</li>
                        <li>일본 IT 기업 채용연계</li>
                        <li>이력서·포트폴리오 컨설팅</li>
                        <li>그룹스터디 운영</li>

                    </ul>
                </div>
            </motion.div>
        </div>
        </>
    );
}

export default Section2;