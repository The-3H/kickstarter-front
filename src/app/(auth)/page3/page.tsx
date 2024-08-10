"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page2() {
  return (
    <div className="bg-[#FFE6EF] h-screen flex flex-col px-[40px]">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-[24px] font-bold">
          Tell us a little more about you
        </div>
        <div className="text-[18px] mt-4">
          This information is necessary to provide personalized nutrition
          information
        </div>

        <div className="text-[20px]">Date of Birth</div>
        <input
          className="h-[60px] rounded-3xl text-center mt-4 px-4 w-[180px]"
          placeholder="YYYY-MM-DD"
        />
        <div className="mt-6 text-[20px]">Height</div>
        <input
          className="h-[60px] rounded-3xl text-right mt-4 px-4 w-[180px]"
          placeholder="cm"
        />
        <div className="mt-6 text-[20px]">Current Weight</div>
        <input
          className="h-[60px] rounded-3xl text-right mt-4 px-4 w-[180px]"
          placeholder="kg"
        />
      </div>
      <div className="w-full h-[55px] bg-[#F8A5C2] mb-[20px] flex justify-center items-center text-white font-bold text-[20px] rounded-2xl">
        Next
      </div>
    </div>
  );
}
