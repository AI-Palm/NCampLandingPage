"use client";
import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

function Section7() {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#FF9900] via-transparent to-black mx-auto flex flex-col items-center ">
      <div className="w-[425px]  leading-normal font-bold text-center mt-20 mb-28">
        <p className="text-white text-5xl">
          대기업, 현직 개발자분들의특강 진행
        </p>{" "}
      </div>
      {/* motion animation */}
      <div className="w-full h-[342.48px] relative flex mx-auto justify-center gap-4">
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:w-[120px] -sm:h-[120px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.15,
            type: "spring",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[120px] -sm:h-[120px] rounded-full absolute "
            src="/section7/instructor-1-section7.png"
          />
        </motion.div>
        <div className="w-[333px] -sm:w-[260px] h-auto text-center flex flex-col ">
          <div className="w-auto h-auto relative flex flex-col  gap-y-2 -sm:gap-y-1">
            <p className="text-[#F90] text-3xl -sm:text-xl pl-20">
              커리어로드맵 설계
            </p>
            <div className="h-[7px] ">
              <img
                className="w-16 h-auto absolute"
                src="/section7/line-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] text-[22px] -sm:text-[17px] text-center pl-20">
              라인 백엔드 개발자 조성빈님 특강
            </p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-full h-[342.48px] relative flex mx-auto justify-center gap-4">
        <div className="w-[333px] -sm:w-[260px] h-auto text-center flex flex-col ">
          <div className="w-auto h-auto relative flex flex-col gap-y-2">
            <p className="text-[#F90] text-3xl -sm:text-xl pr-20">
              시대가 원하는 개발자
            </p>
            <div className="h-[7px] ">
              <img
                className="w-16 h-auto absolute right-0"
                src="/section7/line-right-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] text-[22px] -sm:text-[17px] not-italic font-normal text-center pr-20">
              열혈강의 저자강요천 개발자님 특강
            </p>
          </div>
        </div>
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:w-[120px] -sm:h-[120px]"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.15,
            type: "spring",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[120px] -sm:h-[120px] rounded-full  absolute"
            src="/section7/instructor-2-s7.png"
          />
        </motion.div>
      </div>
      <div className="w-full h-[342.48px] relative flex mx-auto justify-center gap-4">
        <motion.div
          className="w-[342.48px] h-[342.48px] -sm:w-[120px] -sm:h-[120px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.15,
            type: "spring",
            bounce: 0.25,
            delay: 0.05,
          }}
        >
          <img
            className="w-auto h-auto -sm:w-[120px] -sm:h-[120px] rounded-full absolute "
            src="/section7/instructor-3-s7.png"
          />
        </motion.div>
        <div className="w-[333px] -sm:w-[260px] h-auto text-center flex flex-col ">
          <div className="w-auto h-auto relative flex flex-col  gap-y-2">
            <p className="text-[#F90] text-3xl -sm:text-xl pl-20">
              커리어로드맵 설계
            </p>
            <div className="h-[7px] ">
              <img
                className="w-16 h-auto absolute"
                src="/section7/line-section7.png"
                alt=""
              />
            </div>
            <p className="text-[#ADADAD] text-[22px] -sm:text-[17px] text-center pl-20">
              라인 백엔드 개발자 조성빈님 특강
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}

      <div className="">
        <button className="w-[500px] h-[76px]  bg-[#FF9900] justify-center shrink-0 flex flex-row gap-8  items-center rounded-full">
          <p className="text-white text-center text-3xl font-normal not-italic">
            특강 브이로그 보러가기
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="27"
            viewBox="0 0 23 27"
            fill="none"
          >
            <path
              d="M23 13.5L0.500001 26.0574L0.500002 0.942631L23 13.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Section7;
