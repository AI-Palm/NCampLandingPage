import React from "react";
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
function Instructor() {
  return (
    <div className="w-[692px] -sm:w-[330px] -md:w-auto container -sm:p-0 grid md:grid-cols-2 md:grid  gap-24 -sm:gap-x-0 -sm:gap-y-4 -md:gap-y-4 -md:justify-center h-auto mx-auto">
        <div
          className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border"
        >
          <div className="w-[120px] h-[322.76px] -md:h-auto mb-6 -md:order-last">
            <span
              className="opacity-0 translate-x-28 block"
              style={{
                transform: "translateY(0px)",
                opacity: 0,
                transition: "0.2s",
              }}
            ></span>
            <div className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -md:w-[220px] -md:h-[220px] -md:order-last left-0 -md:left-auto -md:right-0 top-0 absolute bg-amber-500 rounded-full" />
            <motion.img
              className="w-[322.76px] h-[322.76px] -sm:w-[120px] -sm:h-[120px] -md:w-[220px] -md:h-[220px] -md:right-0 top-0 absolute rounded-full"
              src={instructor.imagePath}
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            />
          </div>

          <motion.div
            className="w-[288px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
            variants={boxVariant}
            initial="initial"
            whileInView="animate"
          >
            <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
              {instructor.name}
            </p>
            <ul className="flex flex-col gap-1 text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight">
              <div className="hidden -md:block">
                {instructor.mobileDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </div>
              <div className="block -md:hidden">
                {instructor.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </div>
            </ul>
          </motion.div>
        </div>
     
    </div>
  );
}

export default Instructor;
