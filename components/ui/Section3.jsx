"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, useScroll } from "framer-motion";
import Image from "next/image";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
function Section3() {
  const { scrollXProgress } = useScroll();
  const control = useAnimation();

  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="flex flex-col justify-center items-center bg-black container mx-auto">
      <div className="items-center justify-center flex flex-col  text-center text-[50px] -sm:text-[28px] leading-normal not-italic font-bold mb-[42px]">
        <div className="flex flex-row">
          <p className="text-[#FF9900]  ">
            30여년<span className="text-white">의</span>
          </p>
        </div>
        <p className="text-white">IT 교육 노하우로 교육 진행</p>
      </div>
      <div className="w-[620px] -sm:w-auto  text-xl -sm:text-[13.5px] text-center not-italic font-normal mb-[42px]">
        <span className="text-[#ADADAD]">
          ncamp(비트캠프 강남센터)는 클라우드는 물론이고 지난 30여년 동안
        </span>{" "}
        <span className="text-white">실무 IT 프로젝트 교육</span>{" "}
        <span className="text-[#ADADAD]">
          으로 유명한 교육기관인데요? 그만큼 아주 다양한 웹개발 프로젝트를
          진행한 경험이 있으며 이러한 프로젝트는
        </span>
        <span className="text-white">국립중앙도서관에 소장</span>{" "}
        <span className="text-[#ADADAD]">
          하고 있을 정도로 사회적으로 인정받고 있어요!
        </span>
      </div>
      <motion.div className="flex flex-col gap-3 justify-center items-center mb-60">
        <motion.img
          src="/anh1.png"
          width={736}
          height={300}
          alt=""
          className="relative overflow-hidden"
        ></motion.img>
      </motion.div>
      <div className="w-[620px] -sm:w-auto items-center justify-center  text-center text-[50px] -sm:text-[28px]  leading-normal not-italic font-bold mb-[42px]">
        <span className="text-white">업계 전문가, 교육 전문가, 30여년의</span>
        <span className="text-[#FF9900]">IT 교육 노하우</span>
        <span className="text-white">로 기획된 커리큘럼</span>
      </div>

      {/* description */}
      <div className="w-[620px] -sm:w-auto h-[172px]  text-xl text-center not-italic font-normal mb-14">
        <span className="text-[#ADADAD]">
          이처럼 ncamp(비트캠프 강남센터)에서는 기초나 이론도 물론 중요하지만
          이를 활용하고
        </span>{" "}
        <span className="text-white">
          나만의 것으로 만들 수 있는 가장 좋은 방법
        </span>{" "}
        <span className="text-[#ADADAD]">
          은 직접 프로젝트에 활용하는 것 이라 생각해요! 그렇기에
        </span>
        <span className="text-white">Java 웹 개발 프로젝트</span>{" "}
        <span className="text-[#ADADAD]">도 상당히 많이 진행 했는데요?</span>
      </div>

      {/* Image Section 3  */}
      <motion.div className="flex flex-col gap-3 justify-center items-center mb-[49px]">
        <motion.img
          src="/anh2-section-3.png"
          width={736}
          height={300}
          alt=""
          className="relative overflow-hidden"
        ></motion.img>
      </motion.div>

      {/* description */}
      <div className="w-[620px] h-auto mb-[104px] -sm:w-auto text-xl text-center not-italic font-normal">
        <span className="text-[#ADADAD]">
          세월이 흔적이 느껴지는 다양한 Java 웹개발 프로젝트들을
        </span>{" "}
        <span className="text-[#FF9900]">
          ncamp(비트캠프 강남센터) 홈페이지
        </span>{" "}
        <span className="text-[#ADADAD]">
          에서도 확인 가능해요! 그리고 계속 업데이트 중이니까 다양한 웹개발
          프로젝트 기대해주세요.
        </span>
      </div>

      {/* direction bar */}
      <div className="">
        <button className="w-[500px] -sm:w-auto h-[76px]  bg-[#FF9900] justify-center shrink-0 flex flex-row gap-8 -sm:gap-4  items-center rounded-full -sm:px-9">
          <p className="text-white text-center text-3xl -sm:text-base font-normal not-italic">
            수료생 프로젝트 보러가기
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="27"
            viewBox="0 0 23 27"
            fill="none"
            className="-sm:w-[15px] -sm:h-[16px]"
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

export default Section3;
