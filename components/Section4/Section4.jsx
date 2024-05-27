"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Instructor from "./Instructor";
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
        <p className=" font-bold text-white">ncamp</p>
        <p className="text-[#FFFFFF80] text-[25px] -sm:text-xl">
          (비트캠프 강남센터)
        </p>
        <p className=" font-bold text-white">강사진 소개</p>
      </div>
      <div ref={ref} className=" shrink-0 mx-auto">
        
          <Instructor/>
      </div>
    </div>
  );
}

export default Section4;
