"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page2() {
  const [select, setSelect] = useState<"BLUE" | "PINK" | null>(null);

  return (
    <div className="bg-[#FFE6EF] h-screen flex flex-col px-[40px]">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-[24px] font-bold">
          A Few Quick Questions for Personalized Care
        </div>
        <div className="text-[18px] mt-4">
          This helps us provide information tailored to your pregnancy stage
        </div>
        <div className="text-[22px] font-semibold mt-8">I am...</div>
        <div className="flex gap-6 px-4 mt-4">
          <div
            className={
              "bg-white h-[210px] flex-1 cursor-pointer flex justify-start items-center pt-[20px] flex-col rounded-3xl ring-[#63CDDA] " +
              `${select === "BLUE" ? "ring-4" : "ring-0"}`
            }
          >
            <Image
              width={140}
              height={140}
              alt="blue"
              src="/iam-blue.png"
              onClick={() => setSelect("BLUE")}
            />
            <span className="font-medium mt-3 text-[18px]">Pregnant</span>
          </div>
          <div
            className={
              "bg-white h-[210px] flex-1 cursor-pointer flex justify-start items-center pt-[20px] flex-col rounded-3xl ring-[#F8A5C2] " +
              `${select === "PINK" ? "ring-4" : "ring-0"}`
            }
          >
            <Image
              width={140}
              height={140}
              alt="pink"
              src="/iam-pink.png"
              onClick={() => setSelect("PINK")}
            />
            <span className="font-medium mt-3 text-[18px]">Mother</span>
          </div>
        </div>
        <div className="h-[260px] mt-10">
          {select === "BLUE" ? (
            <>
              {" "}
              <div className="text-[20px]">Date of pregnancy confirmation</div>
              <input
                className="h-[60px] rounded-3xl text-center mt-4"
                placeholder="YYYY-MM-DD"
              />
              <div className="mt-6 text-[20px]">Estimated due date</div>
              <input
                className="h-[60px] rounded-3xl text-center mt-4"
                placeholder="YYYY-MM-DD"
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="w-full h-[55px] bg-[#F8A5C2] mb-[20px] flex justify-center items-center text-white font-bold text-[20px] rounded-2xl">
        Next
      </div>
    </div>
  );
}
