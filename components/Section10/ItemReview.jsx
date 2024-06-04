"use client";

import { motion } from "framer-motion";

export default function ItemReview({ index, avatar, accName, comment }) {
    return (
        <div className="flex items-center mt-[6%] mx-[6%] font-apple">
            {
                index % 2 === 0 &&
                <img
                    loading="lazy"
                    src={avatar}
                    className="w-[17%] h-[17%] mr-[3.5%] bg-white rounded-full"
                />
            }
            <motion.div
                className="grow relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}>
                {
                    index % 2 === 0 &&
                    <svg className="ml-[-4%] absolute w-[16%] h-[16%] top-1/2 left-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M6.1679e-05 -6.43865e-07L51.0001 3.8147e-06L51.0001 51L6.1679e-05 -6.43865e-07Z" fill="#FF9900" />
                    </svg>
                }

                <div className={`${index % 2 === 0 ? "bg-[#ff9900] ml-[5%]" : "bg-[#ffc700] mr-[5%]"} py-[5%] px-[6%] rounded-[30px] flex flex-col`}>
                    <div className={`font-appleEB00 ${index % 2 === 0 ? "text-white" : "text-black"} text-[9px] md:text-[18px] font-normal leading-[145%]`}>{accName}</div>
                    <div className={`font-appleR00 ${index % 2 === 0 ? "text-[#af6412]" : "text-[#af8d12]"} text-[9px] md:text-[18px] font-normal leading-[145%]`} dangerouslySetInnerHTML={{ __html: comment }} />
                </div>
                {
                    index % 2 != 0 &&
                    <svg className="w-[16%] h-[16%] mr-[-4%] absolute top-1/2 right-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M51.0001 -6.43865e-07L5.65766e-05 3.8147e-06L6.10352e-05 51L51.0001 -6.43865e-07Z" fill="#FFC700" />
                    </svg>
                }
            </motion.div>
            {
                index % 2 != 0 &&
                <img
                    loading="lazy"
                    src={avatar}
                    className="w-[17%] h-[17%] ml-[3.5%] bg-white rounded-full"
                />
            }
        </div>
    );
}