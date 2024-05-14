"use client";
import React, { useEffect, useRef } from "react";
import Image from 'next/image'
import AtmCard from "@/public/images/atm-card.png"
import ArrowIcon from "@/public/icons/arrow-icon.png"
import { useInView } from "react-intersection-observer";

import { motion, useScroll, useAnimation } from "framer-motion";

import useInViewXAxisAnimation from "@/components/useInViewXAxisAnimation";
import useInViewYAxisAnimation from "@/components/useInViewYAxisAnimation";

const Section12 = () => {   
    const { ref: h1Ref, controls: h1Controls,  } = useInViewXAxisAnimation();
    const { ref: pRef, controls: pControls,  } = useInViewXAxisAnimation();
    const { ref: roadmapRef, controls: roadmapControls } = useInViewYAxisAnimation();
    const { ref: h1blRef, controls: h1blControls } = useInViewXAxisAnimation();
    const { ref: descRef, controls: descControls } = useInViewXAxisAnimation();

  return (
    <>
        <div className="bg-orange-400 h-full flex justify-center  "  >
            <div className='flex flex-col  justify-center items-center my-10'>
                <motion.h1 
                    ref={h1Ref}
                    initial={{ opacity: 0, x: 0 }}
                    animate={h1Controls}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 100,
                    }}
                    className='text-white text-4xl mb-20 font-extrabold translate-x-1/2 '
                    >
                    신청방법
                </motion.h1>
                <motion.p 
                    ref={pRef}
                    initial={{ opacity: 0, x: 0 }}
                    animate={pControls}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 100,
                    }}
                    className='text-white font-extrabold mb-8'>
                    <span className='text-orange-200 font-extrabold'>국민내일배움카드 소지자는</span> 교육비 전액 무료 지원<br />
                    <span className='text-orange-200 font-extrabold'>매월</span> 지원훈련 장려금도 지급</motion.p>
                <motion.div 
                ref={roadmapRef}
                initial={{ opacity: 0, y:180 }}
                animate={roadmapControls}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 80,
                    delay: 0.5
                   
                  }}
                className='flex  flex-wrap md:flex-row justify-center w-auto m-4 '>
                    <div className='flex flex-col justify items-center'>
                        <div className='flex flex-row items-center'>
                            <div className="rounded-full bg-white px-6 py-8  my-4 ml-4">
                                <div className="text-center text-orange-400">STEP 01 <br /> 수강신청</div>
                            </div>
                            <Image src={ArrowIcon} alt="arrow" width={28} height={1} className="m-0" />
                        </div>
                        <span className='text-white'>신청사이트 <br /> 수강신청</span>
                        
                    </div>
                    
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row items-center'>
                            <div className="rounded-full bg-white px-6 py-8 my-4 ml-4">
                                <div className="text-center text-orange-400">STEP 02 <br /> 수강신청</div>
                            </div>
                            <Image src={ArrowIcon} alt="arrow" width={28} height={1} className="m-0" />

                        </div>
                        <span className='text-white'>서류 전형 및<br />사전테스트</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row items-center'>
                            <div className="rounded-full bg-white px-6 py-8  my-4 ml-4">
                                <div className="text-center text-orange-400">STEP 03 <br /> 수강신청</div>
                            </div>
                            <Image src={ArrowIcon} alt="arrow" width={28} height={1} className="m-0" />

                        </div>
                        <span className='text-white'>면접전형 및 <br/> 인성검사</span>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className="rounded-full bg-white px-6 py-8  m-4">
                            <div className="text-center text-orange-400">STEP 04 <br /> 수강신청</div>
                        </div>
                        <span className='text-white mb-6'>최종합격<br/>      </span>
                    </div>
                </motion.div>

                <motion.h1
                    ref={h1blRef}
                    initial={{ opacity: 0, x: 0 }}
                    animate={h1blControls}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 100,
                    }}
                className='text-white text-4xl mt-20 mb-8 font-extrabold'>혜택 및 지원자격</motion.h1>
                <motion.div 
                    ref={descRef}
                    initial={{ opacity: 0, x: 0 }}
                    animate={descControls}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 100,
                    }}

                    className='flex flex-col justify-around '>
                    <div className="flex flex-col lg:items-center items-start lg:flex-row">
                        <ul className="text-sm lg:text-xl md:text-xl text-white">
                            <li>1. 내일배움카드 발급을 하셔야 100% 지원</li>
                            <li>2. 오전9시 ~ 오후 6시까지 수업 참여가 가능</li>
                            <li>3. 취업을 목표로 하는 미취업자, 대학 재 · 휴학 및 졸업 예정자</li>
                        </ul>
                        <div className="block max-w-xs my-4 lg:my-0 lg:ml-8">
                            <Image src={AtmCard} alt="ATM Card Image" width={200} height={200} />
                        </div>
                    </div>
                    <ul className="text-sm lg:text-xl md:text-xl text-orange-200">
                        <li>[재학생 기준]</li>
                        <li>4년제 : 2학년 2학기 종료시점부터 지원 가능</li>
                        <li>3년제 : 1학년 2학기 종료시점부터 지원 가능</li>
                        <li>2년제 : 입학 시점부터 지원 가능</li>
                    </ul>
                </motion.div>

                
               
            </div>
            
        </div>
    </>
  )
}

export default Section12