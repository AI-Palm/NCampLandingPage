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
    <div>
      <div>
        <p>ncamp</p>
        <p>(비트캠프 강남센터)</p>
        <p>강사진 소개</p>
      </div>
      <div ref={ref} className=" shrink-0 m-auto">
        <div className="w-[692px] container grid grid-cols-2 gap-12 h-auto m-auto">
          <div
            className="w-[322.76px] relative flex flex-col
          "
          >
            <div className="w-auto h-[322.76px] mb-6">
              <span
                className="opacity-0 translate-x-28 block"
                style={{
                  transform: isInView ? "none" : " translateY(0px)",
                  opacity: isInView ? 1 : 0,
                  transition: " 0.2s",
                }}
              ></span>
              <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
              <motion.img
                className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
                src="/instructor/instructor-1.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal">
                엄진영 강사님
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <li>
                  <span>삼성전자, 삼성종합기술원, 포스코</span>{" "}
                  <span>등 프리랜서 개발자</span>
                </li>
                <li>그룹웨어/ECM 솔루션 개발 팀장, 비트교육센터 강사</li>
                <li>삼성전자, 삼성종합기술원, 포스코 등 프리랜서 개발자</li>
                <li>삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강</li>
                <li>열혈강의, 웹 개발 워크북 저자</li>
              </ul>
            </div>
          </div>
          <div className="w-[322.76px] h-[322.76px] relative">
            <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
            <img
              className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
              src="/instructor/instructor-2.png"
            />
          </div>
          <div className="w-[322.76px] h-[322.76px] relative">
            <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
            <img
              className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
              src="/instructor/instructor-3.png"
            />
          </div>
          <div className="w-[322.76px] h-[322.76px] relative">
            <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
            <img
              className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
              src="/instructor/instructor-4.png"
            />
          </div>
          <div className="w-[322.76px] h-[322.76px] relative">
            <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
            <img
              className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
              src="/instructor/instructor-5.png"
            />
          </div>
          <div className="w-[322.76px] h-[322.76px] relative">
            <div className="w-[322.76px] h-[322.76px] left-0 top-0 absolute bg-amber-500 rounded-full" />
            <img
              className="w-[322.76px] h-[322.76px]  top-0 absolute rounded-full"
              src="/instructor/instructor-6.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
