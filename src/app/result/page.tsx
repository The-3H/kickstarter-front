"use client";

import Image from "next/image";
import { PieChart } from "@mui/x-charts";

export default function ResultPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#FFE6EF] w-full flex p-[30px] items-center gap-[10px]">
        <div className="w-full flex items-center relative">
          <Image
            width={24}
            height={24}
            alt="search"
            src="/search.png"
            className="absolute left-4"
          />
          <input
            className="h-[50px] flex-[4] rounded-3xl border-[1px] shadow-xl pl-12 outline-none pr-4"
            placeholder="Search Your Foold..."
          />
          <div className="flex-[1] text-[#F8A5C2] font-bold text-center">
            Cancel
          </div>
        </div>
      </div>
      <div className="px-[30px] mt-[15px]">
        {/* 하얀 박스 1 */}
        <div className="rounded-2xl shadow-xl p-[30px]">
          {/* Lv. 2 Generally Good Food */}
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image
              width={36}
              height={36}
              alt="green-smile"
              src="/green-smile.png"
            />
            <span className="font-semibold">Lv. 2</span>
            <span className="text-[#54931F] font-semibold">
              Generally Good Food
            </span>
          </div>
          {/* Nutrition Info */}
          <h3 className="font-semibold mt-3">Nutrition Info</h3>
          <div className="px-2 flex flex-col gap-3 mt-4">
            <div className="flex gap-10">
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Carbs</span>
                <span>3.0g</span>
              </div>
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Sodium</span>
                <span>35mg</span>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Protein</span>
                <span>2.0g</span>
              </div>
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Sugar</span>
                <span>2.0g</span>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Fat</span>
                <span>4.4g</span>
              </div>
              <div className="flex flex-1 justify-between border-b-2 pb-2">
                <span>Calories</span>
                <span>240kcal</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="font-bold text-[#35B748]">▶ Benefits</span>
          </div>
          <div className="mt-1">
            <span className="font-bold text-[#E84118]">▶ Potential Risks</span>
          </div>
        </div>
        {/* 하얀 박스 2 */}
        <div className="rounded-2xl shadow-xl p-[30px]">
          {/* Carbs : Protein : Fat */}
          <div className="flex justify-between mx-10">
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold">Carbs</span>
              <span className="font-semibold">5.8</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span></span>
              <span>:</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold">Protein</span>
              <span className="font-semibold">1.7</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span></span>
              <span>:</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold">Fat</span>
              <span className="font-semibold">2.5</span>
            </div>
          </div>
          {/* 그래프 */}
          <div className="h-[140px] flex justify-center items-center relative">
            <PieChart
              className="absolute left-0"
              series={[
                {
                  data: [
                    { id: 0, value: 17, label: "Protein", color: "#F8A5C2" },
                    { id: 1, value: 25, label: "Fat", color: "#FFD7F8" },
                    { id: 2, value: 58, label: "Carbs", color: "#E86A9C" },
                  ],
                },
              ]}
              width={200}
              height={200}
            />
            {/* <div className="absolute w-4 h-4 bg-red-700" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
