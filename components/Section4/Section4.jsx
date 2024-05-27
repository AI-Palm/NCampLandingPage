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
      <div className="text-center text-[50px] -sm:text-[28px] font-rokaf mb-28">
        <p className=" font-bold text-white">강사진 소개</p>
      </div>
      <div ref={ref} className=" shrink-0 mx-auto">
        <div className="w-[692px] -sm:w-[330px] -md:w-auto container -sm:p-0 grid md:grid-cols-2 md:grid  gap-24 -sm:gap-x-0 -sm:gap-y-4 -md:gap-y-4 -md:justify-center h-auto mx-auto">
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-1.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                엄진영 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li className="">삼성전자, 삼성종합기술원</li>
                  <li>
                    삼성SOS, 현대정보기술, <br /> 쌍용정보통신 교육센터 출강
                  </li>
                  <li>열혈강의, 웹 개발 워크북 저자</li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-white font-normal text-xl ">
                    <span className="text-white">
                      삼성전자, 삼성종합기술원, 포스코
                    </span>{" "}
                    <span className="text-[#ADADAD]">등 프리랜서 개발자</span>
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl ">
                    그룹웨어/ECM 솔루션 개발 팀장, 비트교육센터 강사
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl ">
                    삼성전자, 삼성종합기술원, 포스코 등 프리랜서 개발자
                  </li>
                  <li className="text-white font-normal text-xl ">
                    {" "}
                    <span span className="text-white">
                      삼성SOS, 현대정보기술, 쌍용정보통신 교육센터
                    </span>{" "}
                    <span className="text-[#ADADAD]">출강</span>
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl ">
                    열혈강의, 웹 개발 워크북 저자
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
          {/* instructor 2 */}
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-2.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                강요천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li className="">
                    SK 고객행복주식회사 <br /> - CRM 모듈 개발
                  </li>
                  <li>삼성SOS - 시스템 운영 및 개선</li>
                  <li>열혈강의 객체 중심 Java 저자</li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-[#ADADAD] font-normal text-xl">
                    SK 고객행복주식회사 - CRM 모듈 개발, 탑앤와이즈(주) - SI 및
                    CMS 개발 업무
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    삼성 SOS - 시스템 운영 및 개선, 한국은행 · 이화여대 · 동양
                    생명 CMS 구축
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    열혈강의 객체 중심 Java 저자
                  </li>

                  <li className="text-[#ADADAD] font-normal text-xl">
                    상상력과 HTMLS CSS3 JavaScript로 빚는 모바일 웹 저자
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
          {/* instructor 3 */}
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-3.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                김영진 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li>쌍용정보센터 JAVA 강사,</li>
                  <li>
                    삼성SDS(주) 멀티 캠퍼스 <br /> 신입사원 JAVA IT 역량 강화
                    강사
                  </li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-white font-normal text-xl">
                    쌍용정보센터 JAVA 강사,
                  </li>
                  <li className="text-white font-normal text-xl">
                    삼성SDS(주) 멀티 캠퍼스 신입사원 JAVA IT 역량 강화 강사
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
          {/* instructor 4 */}
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-4.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                고기천 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li className="">
                    하닉스 - 회로검사기 등 <br />
                    장비제어 프로그램 개발
                  </li>
                  <li>공공기관 개발 및 유지보수 사업</li>
                  <li>이젠 아카데미 컴퓨터 학원</li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-[#ADADAD] font-normal text-xl">
                    하닉스 - 회로검사기 등 장비제어 프로그램 개발
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    이에스이 주식회사 한국도로공사 및 공공기관 관련
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    개발 사업 및 유지보수 사업
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    이젠 아카데미 컴퓨터 학원
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
          {/* instructor 5 */}
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-5.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                문상환 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li className="">
                    쌍용 자동차 계측 장비, <br /> 삼성 ADS VM Platform
                  </li>
                  <li>LG Smart TV team, 삼성전자</li>
                  <li>KT OS, 연세대학교 등 출강</li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-white font-normal text-xl">
                    쌍용 자동차 계측 장비, 삼성 ADS VM Platform
                  </li>

                  <li className="text-white font-normal text-xl">
                    LG Smart TV team, 삼성전자 무선사업부
                  </li>
                  <li className="text-white font-normal text-xl">
                    KT OS, 연세대학교 등 출강
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
          {/* instructor 6 */}
          <div className="w-[322.76px] -sm:w-[330px] -md:w-[90vw] -sm:gap-9 relative flex flex-col -md:flex-row -sm:h-[120px] -md:h-[220px] mx-auto -sm:col-span-2 -md:col-span-2 -md:rounded-full -md:border-[#FF9900] -md:border">
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
                src="/instructor/instructor-6.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>

            <motion.div
              className="w-[288px] -md:w-[315px] font-appleR00 mx-auto -sm:py-3 -sm:ml-10 -sm:w-full -sm:h-auto -sm:pr-4 -sm:shrink"
              variants={boxVariant}
              initial="initial"
              whileInView="animate"
            >
              <p className="text-center font-appleB00 -md:text-left text-white text-3xl -sm:text-sm font-normal mb-6 -sm:mb-[3px] -md:mb-4 sm-bw:mt-8 -md:text-[#FF9900]">
                박정관 강사님
              </p>
              <ul className=" text-white list-disc text-xl -sm:text-[11px] -sm:leading-4 -sm:text-left -sm:font-normal -sm:tracking-tight ">
                {/* mobile content */}

                <div className="hidden -md:block">
                  <li>
                    (주) 파크맥스, 팝피스,(주)EKAPA, (주)H&GS, (주)AP 로지스
                  </li>
                  <li>쿠키뷰, 화이트윙시스템(주),아이티윌</li>
                </div>
                {/* largen than -lg  */}
                <div className="block -md:hidden">
                  <li className="text-[#ADADAD] font-normal text-xl">
                    (주) 파크맥스, 팝피스,(주)EKAPA, (주)H&GS, (주)AP 로지스
                  </li>
                  <li className="text-[#ADADAD] font-normal text-xl">
                    쿠키뷰, 화이트윙시스템(주), 아이티윌
                  </li>
                </div>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section4;
