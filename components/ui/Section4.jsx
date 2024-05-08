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
        <div className="w-[692px] container grid grid-cols-2 gap-24 h-auto m-auto">
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
              <div className="text-center text-white text-3xl font-normal mb-6">
                엄진영 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
                <li className="text-white font-normal text-xl">
                  <span className="text-white">
                    삼성전자, 삼성종합기술원, 포스코
                  </span>{" "}
                  <span className="text-[#ADADAD]">등 프리랜서 개발자</span>
                </li>
                <li className="text-[#ADADAD] font-normal text-xl">
                  그룹웨어/ECM 솔루션 개발 팀장, 비트교육센터 강사
                </li>
                <li className="text-[#ADADAD] font-normal text-xl">
                  삼성전자, 삼성종합기술원, 포스코 등 프리랜서 개발자
                </li>
                <li className="text-white font-normal text-xl">
                  {" "}
                  <span span className="text-white">
                    삼성SOS, 현대정보기술, 쌍용정보통신 교육센터
                  </span>{" "}
                  <span className="text-[#ADADAD]">출강</span>
                </li>
                <li className="text-[#ADADAD] font-normal text-xl">
                  열혈강의, 웹 개발 워크북 저자
                </li>
              </ul>
            </div>
          </div>
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
                src="/instructor/instructor-2.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal mb-6">
              강요천 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
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
              </ul>
            </div>
          </div>
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
                src="/instructor/instructor-3.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal mb-6">
              김영진 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
                <li className="text-white font-normal text-xl">
                  쌍용정보센터 JAVA 강사,
                </li>
                <li className="text-white font-normal text-xl">
                  삼성SDS(주) 멀티 캠퍼스 신입사원 JAVA IT 역량 강화 강사
                </li>
              </ul>
            </div>
          </div>
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
                src="/instructor/instructor-4.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal mb-6">
              고기천 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
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
              </ul>
            </div>
          </div>
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
                src="/instructor/instructor-5.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal mb-6">
              문상환 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
                <li className="text-white font-normal text-xl">
                  쌍용 자동차 계측 장비, 삼성 ADS VM Platform
                </li>
                
                <li className="text-white font-normal text-xl">
                LG Smart TV team, 삼성전자 무선사업부
                </li>
                <li className="text-white font-normal text-xl">
                KT OS, 연세대학교 등 출강
                </li>
              </ul>
            </div>
          </div>
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
                src="/instructor/instructor-6.png"
                variants={boxVariant}
                initial="initial"
                whileInView="animate"
              />
            </div>
            <div className="">
              <div className="text-center text-white text-3xl font-normal mb-6">
              박정관 강사님
              </div>
            </div>
            <div className="w-[288px] mx-auto">
              <ul className="list-disc">
                
                <li className="text-[#ADADAD] font-normal text-xl">
                (주) 파크맥스, 팝피스,(주)EKAPA, (주)H&GS, (주)AP 로지스

                </li>
                <li className="text-[#ADADAD] font-normal text-xl">
                쿠키뷰, 화이트윙시스템(주), 아이티윌
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
