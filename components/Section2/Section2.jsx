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
        <div className="bg-black h-full my-60 flex justify-center items-center " ref={containerRef}>
            <motion.div 
                initial={{opacity: 0, y: "200px" }}
                animate={{opacity: isSkillRefInView ? 1 : 0, y: isSkillRefInView ? 0 : 20   }}
                transition={{ delay: 0 }}
                className="flex  flex-col md:flex-row  justify-center items-center">
                <div className=" w-full h-80 bg-black border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-full md:w-full lg:w-80 lg:h-80 md:h-80 sm:h-80"  ref={skillRef}>
                    <h1 className="text-xl lg:text-4xl md:text-4xl text-orange-500 mt-10 mb-4 text-left">
                        교육일정
                    </h1>
                    <ul className="sm:ml-20 text-sm lg:text-xl md:text-xl">
                        <li>24.05.28 ~ 24.11.07</li>
                        <li>평일 09:30 ~ 18:00<br/>(스터디 진행시 22:00까지)</li>
                    </ul>
                    <ul className="ml-4 list-disc text-sm lg:text-xl md:text-xl">
                        <li>실전프로젝트 기반 중심 수업</li>
                        <li>훈련장려금 지원</li>
                        <li>수강료 :<span className='line-through decoration-orange-500'>6,473,520원</span>  → 0원</li>
                    </ul>
                </div>
                <div className="w-full h-80 bg-black border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-full md:w-full xl:w-80 lg:h-80 md:h-80 sm:h-80 xs:h-48 "  ref={skillRef}>
                    <h1 className="text-xl lg:text-4xl md:text-4xl text-orange-500 mt-10 mb-4 text-left">
                        교육지원
                    </h1>
                    <ul className="ml-4 list-disc text-sm lg:text-xl md:text-xl">
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