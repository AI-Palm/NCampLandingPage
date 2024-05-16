"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
const boxVariant = {
  animate: { opacity: 1, scale: 1, transition: { delay: 0.05 } },
  initial: { opacity: 0, scale: 0 },
};
function Section6() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="w-full h-full container mx-auto flex flex-col items-center relative">
      <div className="bg-white  h-[1px] self-center "></div>
      <hr className="w-[736px] -sm:w-full my-12 h-0.5 border bg-white dark:bg-white/10 mt-96 mb-9" />

      <div className="w-1/2 -sm:w-full md-bw:w-full sm-bw:w-full  h-auto text-5xl px-10 md-bw:px-0  mb-9 -sm:text-2xl -sm:mb-4 leading-normal font-bold text-center">
        <span className="text-white">동료들과 함께 성장</span>{" "}
        <span className="text-[#FF9900]">그룹 스터디</span>{" "}
        <span className="text-white"> 운영!</span>
      </div>

      <div className="w-[736px] h-full -sm:w-full -sm:h-full  mb-6">
        <span
          className="opacity-0 translate-x-28 block"
          style={{
            transform: isInView ? "none" : " translateY(0px)",
            opacity: isInView ? 1 : 0,
            transition: " 0.2s",
          }}
        ></span>
        <div className="w-[736px] h-[322.76px] -sm:w-auto -sm:h-auto  left-0  absolute  rounded-full" />
        <motion.img
          className="w-[736px] h-[322.76px] -sm:w-auto -sm:h-auto  "
          src="/section6/pic1-section6.png"
          variants={boxVariant}
          initial="initial"
          whileInView="animate"
        />
      </div>
      <div class="w-[736px] -sm:w-full h-auto grid grid-cols-1 divide-y mb-72 -sm:mb-32">
        <div className=" h-auto flex flex-row justify-center gap-9 -sm:gap-4 mb-6 -sm:mb-4 mx-28 -sm:mx-4">
          <div className="w-[22px] h-auto">
            <Image
              width={22}
              height={27}
              priority
              src="/section6/checked-box.png"
              className="max-w-none"
            ></Image>
          </div>
          <div className="w-auto">
            <p className="text-xl -sm:text-base font-normal not-italic text-[#ADADAD]">
              평일 오후 22시 까지 그룹스터디를 운영하여 혼자서도, 동료들과 함께
              개발자로 성장할 수 있어요!
            </p>
          </div>
        </div>
        <div>
          <div className=" h-auto flex flex-row justify-center gap-9 -sm:gap-4 my-6 -sm:mb-4 mx-28 -sm:mx-4 ">
            <div className="w-[22px] h-auto">
              <Image
                width={22}
                height={27}
                priority
                src="/section6/checked-box.png"
                className="max-w-none"
              ></Image>
            </div>
            <div className="w-auto">
              <p className="text-xl -sm:text-base font-normal not-italic text-[#ADADAD]">
                전자레인지, 정수기, 공기청정기까지 설치되어 있어서 쾌적한
                환경에서 스터디가 가능해요.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" h-auto flex flex-row justify-center gap-9 -sm:gap-4 my-6 -sm:mb-4 mx-28 -sm:mx-4 ">
            <div className="w-[22px] h-auto">
              <Image
                width={22}
                height={27}
                priority
                src="/section6/checked-box.png"
                className="max-w-none"
              ></Image>
            </div>
            <div className="w-auto">
              <p className="text-xl -sm:text-base font-normal not-italic text-[#ADADAD]">
                스터디를 통하여 동료들과 협업하는 방법을 조금씩 배우며 실무
                경험을 쌓아요.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section6;
