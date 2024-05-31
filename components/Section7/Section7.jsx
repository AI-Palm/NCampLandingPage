"use client";
import React from "react";
import { motion, useAnimation, useScroll } from "framer-motion";

function Section7() {
  return (
    <div className="w-full min-h-screen  bg-gradient-custom mx-auto flex flex-col items-center overflow-hidden">
      <div className="w-full  h-full ">
        <p className="w-full  -sm:w-full  leading-normal font-bold text-center mt-[86px] mb-[106px] text-white text-5xl -sm:text-xl font-rokaf">
          대기업, 현직 개발자분들의 <br />
          특강 진행
        </p>
      </div>
      <div className=" w-full h-[90%]  flex flex-col justify-center items-center">
        {/* motion animation */}
        <div className="w-full h-[342px] -sm:h-auto relative flex mx-auto -sm:px-2 -md:px-4 -sm:mb-8  mb-20 justify-center gap-4 -sm:gap-2">
          <motion.div
            className="w-[342px] h-[342px] -sm:w-auto -sm:h-[130px] -sm:min-w-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] self-center"
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
          <div className="w-[334px] -sm:w-[202px] h-auto  text-center flex flex-col justify-center ">
            <div className="w-auto h-auto relative flex flex-col mb-[22px] -sm:gap-0 font-appleR00">
              <div className="flex flex-row items-center gap-[18px] -sm:gap-[6px] -md:mb-0 ">
                <div className="self-end">
                  <img
                    className="w-16 -sm:w-12 md-bw:w-16 h-[7px]  sm-bw:h-[7px] -sm:h-[5px]    -md:mt-0"
                    src="/section7/line-section7.png"
                    alt=""
                  />
                </div>
                <p className="text-[#F90] font-appleB00 text-[30px] leading-normal -sm:text-[18px] -md:text-[22px] pb-[22px] -sm:pb-4  -sm:pl-0 -md:mb-0">
                  커리어로드맵 설계
                </p>
              </div>

              <p className="text-[#ADADAD] text-[22px] -sm:text-[14px] -md:text-[16px] leading-[32px] sm-bw:leading-[24px] -sm:leading-6 text-center pl-[55px] -sm:pl-12 -md:pl-0">
                라인 백엔드 개발자 <br /> 조성빈님 특강
              </p>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="w-full h-[342px] -md:h-auto flex-shrink-0 mb-20 -md:mb-14 -sm:h-auto -sm:px-2 -md:px-0 relative flex mx-auto -sm:mb-8 justify-center gap-4 -sm:gap-2">
          <div className="w-[334px] -sm:w-[202px] h-auto text-center flex flex-col justify-center">
            <div className="w-auto h-auto relative flex flex-col gap-y-2 -sm:gap-y-1 font-appleR00 -sm:pr-14 -md:pr-0 pr-20">
              <p className="text-[#F90] font-appleB00 text-[30px] leading-normal -sm:text-[18px] -md:text-[22px] -sm:text-base   ">
                시대가 원하는 개발자
              </p>
              <div className="h-[6px] sm-bw:h-[11px] ">
                <img
                  className="w-16 md-bw:w-16 -sm:w-12 sm-bw:h-[7px] -sm:h-[5px] h-auto absolute right-0 "
                  src="/section7/line-right-section7.png"
                  alt=""
                />
              </div>
              <p className="text-[#ADADAD] leading-[32px] sm-bw:leading-[22px] -sm:leading-6 text-[22px] -sm:text-[14px] -md:text-[16px] not-italic font-normal text-center  ">
                열혈강의 저자 <br />
                강요천 개발자님 특강
              </p>
            </div>
          </div>
          <motion.div
            className="w-[342px] h-[342px] -sm:h-[130px] -sm:w-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] -sm:min-w-[130px] self-center "
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
        <div className="w-full h-[342px] -sm:h-auto relative flex mx-auto -sm:px-2 -md:px-4 -sm:mb-12  mb-24 justify-center gap-4 -sm:gap-2">
          <motion.div
            className="w-[342px] h-[342px] -sm:w-auto -sm:h-[130px] -sm:min-w-[130px] -md:w-[220px] -md:h-[220px] -md:min-w-[220px] self-center"
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
          <div className="w-[334px] -sm:w-[202px] h-auto  text-center flex flex-col justify-center ">
            <div className="w-auto h-auto relative flex flex-col   font-appleR00">
              <div className="flex flex-row items-center md:mt-8  gap-[18px] -sm:gap-[6px] -sm:mb-[10px] -md:mb-[14px] mb-[22px]">
                <div>
                  <img
                    className="w-16 -sm:w-12 md-bw:w-16 h-[7px]  sm-bw:h-[7px] -sm:h-[5px]   mt-[40px] -md:mt-[30px]"
                    src="/section7/line-section7.png"
                    alt=""
                  />
                </div>
                <p className="text-[#F90] inline font-appleB00 text-[30px] leading-normal -sm:text-[18px] -md:text-[22px] ">
                  나를 매력적인 <br /> 개발자로 만드는 법
                </p>
              </div>
              <p className="text-[#ADADAD] text-[22px]  -sm:text-[14px] -md:text-[16px] leading-[32px] sm-bw:leading-[24px] -sm:leading-6 text-center pl-[55px] md-bw:pl-12  -sm:pl-12 -md:pl-0">
                Lunit <br /> 머신러닝 엔지니어 김동이님
              </p>
            </div>
          </div>
        </div>

        <button className="w-[500px] -sm:w-auto -md:w-[300px] h-[76px] -sm:h-[42px] -md:h-[50px] mb-72  bg-[#FF9900] justify-center shrink-0 flex flex-row gap-8  items-center rounded-full -sm:px-8">
          <p className="text-white text-center text-[30px] leading-[30px] -sm:text-[20px] -md:text-[22px] -sm:text-base -md:text-lg font-normal not-italic font-appleR00">
            특강 브이로그 보러가기
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="27"
            viewBox="0 0 23 27"
            fill="none"
            className="-sm:w-[16px] -sm:h-[16px] -md:w-[18px] -md:h-[18px]"
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
