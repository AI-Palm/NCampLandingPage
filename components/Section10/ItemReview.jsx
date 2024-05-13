"use client";

import { motion } from "framer-motion";

export default function ItemReview({ index, avatar, accName, comment }) {
    return (
        <div className="flex items-center sm:mt-[50px] mt-5 sm:mx-[54px] mx-5">
            {
                index % 2 === 0 &&
                <img
                    loading="lazy"
                    src={avatar}
                    className="w-[17%] h-[17%] mr-[22px] bg-white rounded-full"
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
                    <svg className="absolute top-1/2 left-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M6.1679e-05 -6.43865e-07L51.0001 3.8147e-06L51.0001 51L6.1679e-05 -6.43865e-07Z" fill="#FF9900" />
                    </svg>
                }

                <div className={`${index % 2 === 0 ? "bg-[#ff9900] ml-[33px]" : "bg-[#ffc700] mr-[33px]"} py-6 px-10 rounded-[30px] flex flex-col`}>
                    <div className={`${index % 2 === 0 ? "text-white" : "text-black"} text-[18px] font-normal leading-[26px]`}>{accName}</div>
                    <div className={`${index % 2 === 0 ? "text-[#af6412]" : "text-[#af8d12]"} text-[18px] font-normal leading-[26px]`}>{comment}</div>
                </div>
                {
                    index % 2 != 0 &&
                    <svg className="absolute top-1/2 right-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M51.0001 -6.43865e-07L5.65766e-05 3.8147e-06L6.10352e-05 51L51.0001 -6.43865e-07Z" fill="#FFC700" />
                    </svg>
                }
            </motion.div>
            {
                index % 2 != 0 &&
                <img
                    loading="lazy"
                    src={avatar}
                    className="w-[17%] h-[17%] ml-[22px] bg-white rounded-full"
                />
            }
        </div>
    );
}