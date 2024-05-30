import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const instructorsData = [
  {
    name: "엄진영 강사님",
    imagePath: "/instructor/instructor-1.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
  {
    name: "강요천 강사님",
    imagePath: "/instructor/instructor-2.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
  {
    name: "김영진 강사님",
    imagePath: "/instructor/instructor-3.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
  {
    name: "고기천 강사님",
    imagePath: "/instructor/instructor-4.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
  {
    name: "문상환 강사님",
    imagePath: "/instructor/instructor-5.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
  {
    name: "박정관 강사님",
    imagePath: "/instructor/instructor-6.png",
    description: [
      "삼성전자, 삼성종합기술원",
      "삼성SOS, 현대정보기술, 쌍용정보통신 교육센터 출강",
      "열혈강의, 웹 개발 워크북 저자",
    ],
    mobileDescription: ["삼성전자", "현대정보기술", "웹 개발 워크북 저자"],
  },
];
const boxVariant = {
  animate: { opacity: 1, scale: 1, transition: { delay: 0.05 } },
  initial: { opacity: 0, scale: 0 },
};
function Instructor({ imagePath }) {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div
      useref={isInView}
      className="w-full -md:w-[120px] h-[322.76px] -md:h-auto mb-6 -md:order-last"
    >
      <span
        className="opacity-0 translate-x-28 block"
        style={{
          transform: "translateY(0px)",
          opacity: 0,
          transition: "0.2s",
        }}
      ></span>
      <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -md:w-[220px] -md:h-[220px] -md:order-last left-0 -md:left-auto -md:right-0 top-0 -md:top-[-1px] bg-[#FF9900]  absolute  rounded-full   " />
      <motion.img
        className="w-[322.76px] z-10 h-[322.76px] -sm:w-[120px] -sm:h-[120px] -md:w-[220px] -md:h-[220px] -md:right-[0px] top-[1px] -md:top-[-1px] absolute rounded-full -md:border-t -md:border-l -md:border-b -md:border-[#FF9900]"
        src={imagePath}
        variants={boxVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      />
    </div>
  );
}

export default Instructor;
