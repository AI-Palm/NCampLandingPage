"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneBG from "../../public/images/phoneBG.svg"
import ItemReview from "./ItemReview";

export default function Section10() {
    return (
        <div className="main mt-[330px]">
            <motion.div
                className="text-white text-center text-[50px] font-bold leading-normal"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}>
                30여년<br />훈련생분들의 <span className="text-[#ff9900]">솔직한</span> 후기
            </motion.div>
            <div className="relative mt-16">
                <Image className="w-full" src={phoneBG} />
                <div className="w-full h-full absolute top-0 flex justify-center">
                    <div className="w-[88%] h-[81%] absolute top-[7%] flex flex-col divide-y divide-white">
                        <div className="grow py-[50px] overflow-hidden">
                            <ItemReview index={0} />
                            <ItemReview index={1} />
                            <ItemReview index={2} />
                            <ItemReview index={3} />
                        </div>
                        <div className="flex items-center pt-[30px] px-8">
                            <div className="w-[61px] h-[61px] relative mr-9">
                                <div className="w-full h-[2px] bg-white absolute top-1/2" />
                                <div className="w-[2px] h-full bg-white absolute left-1/2" />
                            </div>
                            <div className="grow flex justify-end bg-[#FFFFFF1A] border border-white rounded-full">
                                <div className="text-black text-[22px] font-normal leading-normal py-6 px-11 bg-white rounded-full">전송</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full absolute top-0 bg-gradient-to-b from-80% from-transparent to-[98%] to-black" />
            </div>
        </div>
    );
}