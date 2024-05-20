"use client";

import { motion } from "framer-motion";

export default function Section11() {
  return (
    <div className="main mt-[330px] flex flex-col">
      <div className="text-white text-center text-[50px] font-bold leading-normal">
        수료가 끝이 아닌
        <br />
        <span className="text-[#ff9900]">시작</span>이 될 수 있도록
      </div>
      <div className="mt-[49px] flex justify-around items-end">
        <img
          loading="lazy"
          src="/section11/pic1-section11.png"
          className="w-[42%] aspect-square object-cover"
        />
        <motion.div
          className="ml-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          30여 년 동안
          <br />
          <span className="text-white">개발자 양성</span>을 위해
          <br />
          지금까지 달려왔습니다.
        </motion.div>
      </div>
      <div className="mt-[55px] flex justify-around items-end">
        <motion.div
          className="mr-5 text-white text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          네이버클라우드 파트너사,
          <br />
          일본 IT 기업 채용연계
          <span className="text-[#adadad]">
            를<br />
            시작으로
          </span>
        </motion.div>
        <img
          loading="lazy"
          src="/section11/pic3-section11.png"
          className="w-[42%] aspect-square object-cover"
        />
      </div>
      <div className="mt-[55px] flex justify-around items-end">
        <img
          loading="lazy"
          src="/section11/pic3-section11.png"
          className="w-[42%] aspect-square object-cover"
        />
        <motion.div
          className="ml-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          소통의 장을 마련하고자
          <br />
          <span className="text-white">
            현업 개발자분들과 멘토링,
            <br />
            특강
          </span>
          을 진행하고 있습니다.
        </motion.div>
      </div>
      <div className="mt-[55px] flex justify-around items-end">
        <motion.div
          className="mr-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          수료가 끝이 아닌
          <br />
          <span className="text-white">새로운 시작</span>이 될 수 있도록
          <br />
          ncamp가 항상 노력하겠습니다.
        </motion.div>
        <img
          loading="lazy"
          src="/section11/pic4-section11.png"
          className="w-[42%] aspect-square object-cover"
        />
      </div>
      <div className="flex items-center justify-center pt-[154px] pb-[169px]">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="364"
          viewBox="0 0 16 364"
          fill="none"
        >
          <path
            d="M7.29288 363.707C7.6834 364.098 8.31657 364.098 8.70709 363.707L15.0711 357.343C15.4616 356.953 15.4616 356.319 15.0711 355.929C14.6805 355.538 14.0474 355.538 13.6568 355.929L7.99998 361.586L2.34313 355.929C1.95261 355.538 1.31944 355.538 0.928917 355.929C0.538392 356.319 0.538392 356.953 0.928917 357.343L7.29288 363.707ZM7 -4.37114e-08L6.99998 363L8.99998 363L9 4.37114e-08L7 -4.37114e-08Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
