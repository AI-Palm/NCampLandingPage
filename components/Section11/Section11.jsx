"use client";

import { motion } from "framer-motion";

export default function Section11() {
  return (
    <div className="main mt-[330px] flex flex-col">
      <div className="font-rokaf text-white text-center text-[50px] font-bold leading-normal">
        수료가 끝이 아닌
        <br />
        <span className="text-[#ff9900]">시작</span>이 될 수 있도록
      </div>
      <div className="mt-[49px] flex justify-around items-end overflow-hidden">
        <img
          loading="lazy"
          src="/section11/pic1-section11.png"
          className="w-[34%] max-w-[333px] aspect-square object-cover"
        />
        <motion.div
          className="w-[34%] font-appleR00 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          30여 년 동안
          <br />
          <span className="font-appleB00 text-white">개발자 양성</span>을 위해
          <br />
          지금까지 달려왔습니다.
        </motion.div>
      </div>
      <div className="mt-[55px] flex justify-around items-end overflow-hidden">
        <motion.div
          className="w-[34%] font-appleB00 text-white text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          네이버클라우드 파트너사,
          <br />
          일본 IT 기업 채용연계
          <span className="font-appleR00 text-[#adadad]">
            를<br />
            시작으로
          </span>
        </motion.div>
        <img
          loading="lazy"
          src="/section11/pic2-section11.png"
          className="w-[34%] max-w-[333px] aspect-square object-cover"
        />
      </div>
      <div className="mt-[55px] flex justify-around items-end overflow-hidden">
        <img
          loading="lazy"
          src="/section11/pic3-section11.png"
          className="w-[34%] max-w-[333px] aspect-square object-cover"
        />
        <motion.div
          className="w-[34%] font-appleR00 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          소통의 장을 마련하고자
          <br />
          <span className="font-appleB00 text-white">
            현업 개발자분들과 멘토링,
            <br />
            특강
          </span>
          을 진행하고 있습니다.
        </motion.div>
      </div>
      <div className="mt-[55px] flex justify-around items-end overflow-hidden">
        <motion.div
          className="w-[34%] font-appleR00 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          수료가 끝이 아닌
          <br />
          <span className="font-appleB00 text-white">새로운 시작</span>이 될 수 있도록
          <br />
          ncamp가 항상 노력하겠습니다.
        </motion.div>
        <img
          loading="lazy"
          src="/section11/pic4-section11.png"
          className="w-[34%] max-w-[333px] aspect-square object-cover"
        />
      </div>
      <div className="flex items-center justify-center pt-[154px] pb-[169px]">
        <img
          loading="lazy"
          src="/section11/pic-arrow.png"
          className="w-[16%] aspect-[1/3]"
        />
      </div>
    </div>
  );
}
