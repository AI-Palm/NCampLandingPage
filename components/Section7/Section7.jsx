"use client";
import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

function Section7() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#FF9900] via-transparent to-black mx-auto flex flex-col items-center overflow-hidden">
      <div className="w-[425px] -sm:w-full  leading-normal font-bold text-center mt-[86px] mb-[106px] text-white text-5xl -sm:text-xl font-rokaf">
        대기업, 현직 개발자분들의특강 진행
      </div>
      {/* motion animation */}
      <div className="w-full h-[342.48px] -sm:h-auto relative flex mx-auto -sm:px-2 -md:px-4 mb-8 justify-center gap-4 md-bw:gap-16">
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:w-auto -sm:min-w-[130px] -sm:h-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] self-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            type: "tween",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[130px] -sm:h-[130px] rounded-full absolute -md:w-[220px] -md:h-[220px] "
            src="/section7/instructor-1-section7.png"
          />
        </motion.div>
        <div className="w-[333px] -sm:w-auto h-auto  text-center flex flex-col justify-center ">
          <div className="w-auto h-auto relative flex flex-col  gap-y-2 -sm:gap-y-1 font-appleR00">
            <p className="text-[#F90] font-appleB00 text-3xl -sm:text-base -sm:pl-16 pl-24">
              커리어로드맵 설계
            </p>
            <div className="h-[6px]  sm-bw:h-[11px] ">
              <img
                className="w-16 -sm:w-12 md-bw:w-24 h-auto absolute "
                src="/section7/line-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] leading-[32px] sm-bw:leading-[22px] -sm:leading-6 text-[22px] -sm:text-[14px] text-center pl-24 -sm:pl-16">
              라인 백엔드 개발자 <br />
              조성빈님 특강
            </p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-full h-[342.48px] flex-shrink-0  -sm:h-auto -sm:px-2 -md:px-0 relative flex mx-auto -sm:mb-8 justify-center gap-4 md-bw:gap-16">
        <div className="w-[333px] -sm:w-auto h-auto text-center flex flex-col justify-center">
          <div className="w-auto h-auto relative flex flex-col gap-y-2 -sm:gap-y-1 font-appleR00">
            <p className="text-[#F90] font-appleB00 text-3xl -sm:text-base pr-24 -sm:pr-16 ">
              시대가 원하는 개발자
            </p>
            <div className="h-[6px] sm-bw:h-[11px] ">
              <img
                className="w-16 md-bw:w-24 -sm:w-12 h-auto absolute right-0 "
                src="/section7/line-right-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] leading-[32px] sm-bw:leading-[22px] -sm:leading-6 text-[22px] -sm:text-[14px] not-italic font-normal text-center pr-24 -sm:pr-16">
              열혈강의 저자 <br />
              강요천 개발자님 특강
            </p>
          </div>
        </div>
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:h-[130px] -sm:w-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] -sm:min-w-[130px] self-center "
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            type: "tween",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[130px] -sm:h-[130px] -md:w-[220px] -md:h-[220px] rounded-full  absolute"
            src="/section7/instructor-2-s7.png"
          />
        </motion.div>
      </div>
    {/* section 3 */}
      <div className="w-full h-[342.48px] -sm:h-auto relative flex mx-auto -sm:px-2  mb-24 justify-center gap-4 md-bw:gap-16">
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:w-auto -sm:h-[130px] -sm:min-w-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] self-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            type: "tween",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[130px] -sm:h-[130px] rounded-full absolute -md:w-[220px] -md:h-[220px] "
            src="/section7/instructor-3-s7.png"
          />
        </motion.div>
        <div className="w-[333px] -sm:w-auto h-auto  text-center flex flex-col justify-center ">
          <div className="w-auto h-auto relative flex flex-col  gap-y-2 -sm:gap-y-1 font-appleR00">
            <p className="text-[#F90] font-appleB00 text-3xl -sm:text-base pl-24 -sm:pl-16">
              나를 매력적인 <br /> 개발자로 만드는 법
            </p>
            <div className="h-[6px]  sm-bw:h-[11px] ">
              <img
                className="w-16 -sm:w-12 md-bw:w-24 h-auto absolute "
                src="/section7/line-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] text-[22px] -sm:text-[14px] leading-[32px] sm-bw:leading-[24px] -sm:leading-6 text-center pl-24 -sm:pl-16">
              Lunit <br /> 머신러닝 엔지니어 김동이님
            </p>
          </div>
        </div>
      </div>
  

      <button className="w-[500px] -sm:w-auto h-[76px] mb-72  bg-[#FF9900] justify-center shrink-0 flex flex-row gap-8  items-center rounded-full -sm:px-8">
        <p className="text-white text-center text-3xl -sm:text-base font-normal not-italic font-appleR00">
          특강 브이로그 보러가기
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="27"
          viewBox="0 0 23 27"
          fill="none"
          className="-sm:w-[20px] -sm:h-[24px]"
        >
          <path
            d="M23 13.5L0.500001 26.0574L0.500002 0.942631L23 13.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default Section7;
