"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
const boxVariant = {
  animate: { opacity: 1, scale: 1, transition: { delay: 0.05 } },
  initial: { opacity: 0, scale: 0 },
};
function Section4() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="container mx-auto my-96">
      <div className="text-center text-[50px] -sm:text-[28px] mb-28">
        <p className=" font-bold text-white">ncamp</p>
        <p className="text-[#FFFFFF80] text-[25px] -sm:text-xl">
          (비트캠프 강남센터)
        </p>
        <p className=" font-bold text-white">강사진 소개</p>
      </div>
      <div ref={ref} className=" shrink-0 mx-auto">
        <div className="w-[692px] -sm:w-[330px] container -sm:p-0 grid grid-cols-2  gap-24 -sm:gap-x-0 -sm:gap-y-4 -sm:justify-center h-auto mx-auto">
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-1.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
          {/* instructor 2 */}
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-2.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
          {/* instructor 3 */}
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-3.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
          {/* instructor 4 */}
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-4.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
          {/* instructor 5 */}
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-5.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
          {/* instructor 6 */}
          <div
            className="w-[322.76px] -sm:w-[330px] -sm:gap-9 -sm: relative flex flex-col -sm:flex-row -sm:h-[120px] mx-auto 
          -sm:col-span-2 -sm:rounded-full -sm:border-[#FF9900] -sm:border
            "
          >
            <div className="w-[120px] h-[322.76px] -sm:h-auto mb-6 -sm:order-last">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:order-last left-0 -sm:left-auto -sm:right-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -sm:right-0 top-0 absolute rounded-full"
                src="/instructor/instructor-6.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink "
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className=" text-center -sm:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -sm:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                <li>삼성전자, 삼성종합기술원</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
