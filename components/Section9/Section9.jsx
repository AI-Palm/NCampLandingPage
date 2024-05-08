"use client";

import { motion } from "framer-motion";

export default function Section9() {
    return (
        <div className="main mt-[100px]">
            <motion.div
                className="text-white text-[50px] font-bold leading-normal text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}>
                커리어의 시작<br />글로벌 하게
            </motion.div>
            <div className="flex flex-col items-center mt-11 px-[54px] pt-[43px] pb-[50px] bg-[#ff9900] rounded-[50px]">
                <div className="text-white text-center text-[25px] font-normal leading-[35px]">aws캠프에서는<br />일본 IT기업 CAL 취업연계가 가능해요</div>
                <motion.div
                    className="w-full flex flex-wrap justify-between items-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className="w-44 h-44 mt-2 bg-white rounded-full flex justify-center items-center text-center text-[#ff9900] font-normal text-xl">ncamp의<br />교육과정 수료<br />후 문의</div>
                    <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38" fill="none">
                        <path d="M32 19L0.499998 37.1865L0.5 0.813466L32 19Z" fill="#E3740C" fill-opacity="0.7" />
                    </svg>
                    <div className="w-44 h-44 mt-2 bg-white rounded-full flex justify-center items-center text-center text-[#ff9900] font-normal text-xl">CAL채용 담당자<br />연락 후<br />일정 논의</div>
                    <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="32" height="38" viewBox="0 0 32 38" fill="none">
                        <path d="M32 19L0.499998 37.1865L0.5 0.813466L32 19Z" fill="#E3740C" fill-opacity="0.7" />
                    </svg>
                    <div className="w-44 h-44 mt-2 bg-white rounded-full flex justify-center items-center text-center text-[#ff9900] font-normal text-xl">면접 후<br />최종 합격!</div>
                </motion.div>
                <div className="mt-11 text-white text-center text-[20px] font-normal leading-[30px]">자세한 지원 자격 및 절차는<br />ncamp에 문의 해주세요.</div>
            </div>
        </div>
    );
}