"use client";

import Image from "next/image";
import { PieChart } from "@mui/x-charts";
import { useState } from "react";

export default function ResultPage() {
  const [toggle, setToggle] = useState<null | "GREEN" | "RED">(null);

  const changeToggle = (option: "GREEN" | "RED") => {
    if (option === "GREEN") {
      if (toggle === "GREEN") setToggle(null);
      else setToggle("GREEN");
    } else if (option === "RED") {
      if (toggle === "RED") setToggle(null);
      else setToggle("RED");
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#FFE6EF] h-screen overflow-y-auto pb-8 overflow-x-hidden">
      <div className="bg-[#FFE6EF] w-full flex p-[30px] items-center gap-[10px]">
        <div className="w-full flex items-center relative gap-2">
          <Image
            width={24}
            height={24}
            alt="search"
            src="/search.png"
            className="absolute left-4"
          />
          <input
            className="h-[50px] flex-[4] rounded-3xl border-[1px] shadow-xl pl-12 outline-none pr-4"
            placeholder="Search Your Food..."
          />
          <div className="flex-[1] text-[#F8A5C2] font-bold text-center">
            Cancel
          </div>
        </div>
      </div>
      <div className="px-[30px] mt-[15px] select-none">
        {/* 하얀 박스 1 */}
        <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-12">
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
          <div
            className="mt-4 cursor-pointer"
            onClick={() => changeToggle("GREEN")}
          >
            <span
              className="font-bold text-[#35B748] inline-block"
              style={toggle === "GREEN" ? { transform: "rotate(90deg)" } : {}}
            >
              ▶
            </span>
            <span className="font-bold text-[#35B748]"> Benefits</span>
            {toggle === "GREEN" && (
              <div className="ml-4 text-[#35B748]">
                Good Good Good Good Good Good Good Good Good Good Good Good Good
                Good Good Good Good Good
              </div>
            )}
          </div>
          <div
            className="mt-1 cursor-pointer"
            onClick={() => changeToggle("RED")}
          >
            <span
              className="font-bold text-[#E84118] inline-block"
              style={toggle === "RED" ? { transform: "rotate(90deg)" } : {}}
            >
              ▶
            </span>
            <span className="font-bold text-[#E84118]"> Potential Risks</span>
            {toggle === "RED" && (
              <div className="ml-4 text-[#E84118]">
                Lorem ipsum dolor sit amet, consectetur api- scing elit, sed do
              </div>
            )}
          </div>
        </div>

        {/* 하얀 박스 2 */}
        <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-12 relative pb-[16px]">
          {/* 빨간색으으으으으으 */}
          <div className="flex absolute -left-8 top-0 -translate-y-1/2">
            <div className="h-[50px] bg-[#d8739b] flex items-center justify-end font-bold text-white pl-10 text-[18px]">
              Recommended Intake
            </div>
            <div className="right-tri" />
          </div>
          <div className="mt-2 font-medium text-pretty">
            Moderate consumption (1-2 servings per week)
          </div>
        </div>

        {/* 하얀 박스 3 */}
        <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-8 relative pb-[16px]">
          {/* 빨간색으으으으으으 */}
          <div className="flex absolute -right-8 top-0 -translate-y-1/2">
            <div className="left-tri" />
            <div className="h-[50px] bg-[#d8739b] flex items-center justify-start font-bold text-white pr-10 text-[18px] text-nowrap">
              Trimester-specific Recommendations
            </div>
          </div>
          <div className="mt-2 font-medium text-pretty">
            2nd trimester - Limit intake due to high sodium content; 3rd
            trimester - Avoid excessive consu- mption to minimize risk of high
            blood pressure
          </div>
        </div>
        {/* 하얀 박스 4 */}
        <div className="rounded-2xl shadow-xl p-[30px] bg-white">
          {/* Carbs : Protein : Fat */}
          <div className="flex justify-between mx-10">
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold text-lg">
                Carbs
              </span>
              <span className="font-semibold text-lg">5.8</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span></span>
              <span className="text-lg">:</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold text-lg">
                Protein
              </span>
              <span className="font-semibold text-lg">1.7</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span></span>
              <span className="text-lg">:</span>
            </div>
            <div className="flex flex-col justify-between h-[60px] text-center">
              <span className="text-[#718093] font-semibold text-lg">Fat</span>
              <span className="font-semibold text-lg">2.5</span>
            </div>
          </div>
          {/* 그래프 */}
          <div className="relative">
            <div className="h-[140px] flex justify-center items-center  relative">
              <PieChart
                className="donutParent absolute left-0 -top-5"
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
              <div className="whiteDonut"></div>
              <div className="absolute right-0 bottom-3 w-[200px] h-[100px] flex flex-col justify-between py-2">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#D8739B] mr-4" />
                  <span className="flex-[3] font-semibold">Carbs</span>
                  <span className="flex-[2] text-[#718093] font-semibold">
                    58%
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#ECA9C1] mr-4" />
                  <span className="flex-[3] font-semibold">Protein</span>
                  <span className="flex-[2] text-[#718093] font-semibold">
                    17%
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#FFD7F8] mr-4" />
                  <span className="flex-[3] font-semibold">Fat</span>
                  <span className="flex-[2] text-[#718093] font-semibold">
                    25%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 하얀 박스 */}
        <div className="rounded-2xl shadow-xl p-[30px] py-[16px] bg-white mb-2 mt-8 font-semibold">
          <div className="mb-4">
            <span>Save </span>
            <span className="bg-[#DCDDE1] p-[5px] rounded-xl">$4.00</span>
            <span> for a </span>
            <span className="bg-[#DCDDE1] p-[5px] rounded-xl">Coffee</span>
            <span> ?</span>
          </div>
          <div className="flex gap-6">
            <div className="flex-1 text-center bg-[#FFDD5A] rounded-xl h-10 flex items-center justify-center">
              Yes
            </div>
            <div className="flex-1 text-center bg-[#DCDDE1] rounded-xl h-10 flex items-center justify-center">
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
