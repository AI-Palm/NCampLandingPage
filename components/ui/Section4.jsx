"use client";
import Image from "next/image";
import React from "react";

function Section4() {
  return (
    <div>
      <div>
        <p>ncamp</p>
        <p>(비트캠프 강남센터)</p>
        <p>강사진 소개</p>
      </div>
      <div class="flex justify-center items-center h-screen">
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex relative items-center justify-center">
          <img
              className="w-full h-[322px] absolute rounded-full bg-[#FF9900]"
              
              src="/instructor/instructor-1.png"
            ></img>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
          <div class="col-span-1  flex items-center justify-center">
            <Image
              width={320}
              height={320}
              src="/instructor/instructor-1.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
