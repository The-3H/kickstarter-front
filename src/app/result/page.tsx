"use client";

import Image from "next/image";
import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import tempData, { TempData } from "@/mock/tempData";
import getLevelMsg from "@/utils/getLevelMsg";
import getLevelColor from "@/utils/getLevelColor";

export function getWeeksSince(dateString: string) {
  // 주어진 날짜 문자열을 Date 객체로 변환
  const givenDate = new Date(dateString);

  // 현재 날짜
  const currentDate = new Date();

  // 두 날짜 간의 차이를 밀리초 단위로 계산
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // 밀리초를 주 단위로 변환
  const differenceInWeeks = Math.floor(
    differenceInTime / (1000 * 3600 * 24 * 7)
  );

  return differenceInWeeks;
}

export function calculateAge(birthDateString: string) {
  // 생년월일을 Date 객체로 변환
  const birthDate = new Date(birthDateString);

  // 현재 날짜
  const currentDate = new Date();

  // 나이 계산
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();

  // 생일이 아직 지나지 않았다면 나이에서 1을 뺍니다
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export default function ResultPage() {
  const [toggle, setToggle] = useState<null | "GREEN" | "RED">(null);
  const [data, setData] = useState<TempData | null>(null);

  const [keyword, setKeyword] = useState("");

  const changeToggle = (option: "GREEN" | "RED") => {
    if (option === "GREEN") {
      if (toggle === "GREEN") setToggle(null);
      else setToggle("GREEN");
    } else if (option === "RED") {
      if (toggle === "RED") setToggle(null);
      else setToggle("RED");
    }
  };

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const getData = async () => {
    const jj = {
      age: calculateAge(localStorage.getItem("birth") || ""),
      pregnancy_week: getWeeksSince(localStorage.getItem("pregnancy") || ""),
      input: search,
    };
    console.log(jj);
    let good = false;
    while (good === false) {
      console.log("gogo");
      try {
        const response = await fetch("http://147.46.62.42:58000/search", {
          method: "POST", // POST 메서드 명시
          headers: {
            "Content-Type": "application/json", // JSON 형식 지정
          },
          body: JSON.stringify(jj),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        good = true;
        setData(data);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    }
    // setData(tempData);
    // console.log(tempData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]); // 의존성 배열을 비워 컴포넌트 마운트 시에만 실행

  const router = useRouter();

  console.log(data);

  const nutrientEntries = data
    ? Object.entries(data.nutrient_table.Nutrient)
    : null;
  return (
    <form
      className="w-full flex flex-col bg-[#FFE6EF] h-screen overflow-y-auto pb-8 overflow-x-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/result?search=${keyword}`);
      }}
    >
      <div className="bg-[#FFE6EF] w-full flex p-[30px] items-center gap-[10px]">
        <div className="w-full flex items-center relative gap-2">
          <Image
            width={24}
            height={24}
            alt="search"
            src={`/search.png`}
            className="absolute left-4"
          />
          <input
            className="h-[50px] flex-[4] rounded-3xl border-[1px] shadow-xl pl-12 outline-none pr-4"
            placeholder="Specific food name..."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <div
            className="flex-[1] text-[#F8A5C2] font-bold text-center cursor-pointer"
            onClick={() => router.push("/home")}
          >
            Cancel
          </div>
        </div>
      </div>
      {data && nutrientEntries ? (
        <div className="px-[30px] mt-[15px] select-none">
          {/* 하얀 박스 1 */}
          <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-12">
            {/* Lv. 2 Generally Good Food */}
            <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
              <Image
                width={36}
                height={36}
                alt="level"
                src={`/lv${data.safety_level}.png`}
              />
              <span className="font-semibold">Lv. {data.safety_level}</span>
              <span
                className="font-semibold"
                style={{ color: getLevelColor(data.safety_level) }}
              >
                {getLevelMsg(data.safety_level)}
              </span>
            </div>
            {/* Nutrition Info */}
            <h3 className="font-semibold mt-3">Nutrition Info</h3>
            <div className="px-2 flex flex-col gap-3 mt-4">
              {nutrientEntries.reduce(
                (acc: JSX.Element[], [key, nutrient], index) => {
                  // Check if the current index is even
                  if (index % 2 === 0) {
                    const nextIndex = index + 1;
                    const hasNext = nutrientEntries[nextIndex];

                    acc.push(
                      <div
                        key={index}
                        className="flex gap-7"
                      >
                        <div className="flex flex-1 justify-between border-b-2 pb-2">
                          <span>{nutrient.trim()}</span>
                          <span>
                            {tempData.nutrient_table["Amount per 100g"][
                              key
                            ].trim()}
                          </span>
                        </div>
                        {hasNext && (
                          <div className="flex flex-1 justify-between border-b-2 pb-2">
                            <span>{nutrientEntries[nextIndex][1].trim()}</span>
                            <span>
                              {tempData.nutrient_table["Amount per 100g"][
                                nutrientEntries[nextIndex][0]
                              ].trim()}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return acc;
                },
                []
              )}
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
                  {data.parsed_data.benefits_for_pregnancy.replace("- ", "")}
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
                  {data.parsed_data.potential_risks_or_contraindications.replace(
                    "- ",
                    ""
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 하얀 박스 2 */}
          <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-12 relative pb-[16px]">
            {/* 빨간색으으으으으으 */}
            <div className="flex absolute -left-8 top-0 -translate-y-1/2">
              <div className="h-[50px] bg-[#d8739b] flex items-center justify-end font-bold text-white pl-10 text-[18px]">
                Preparation Tips
              </div>
              <div className="right-tri" />
            </div>
            <div className="mt-2 font-medium text-pretty">
              {data.parsed_data.preparation_tips.replace("- ", "")}
            </div>
          </div>

          {/* 하얀 박스 3 */}
          <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-12 relative pb-[16px]">
            {/* 빨간색으으으으으으 */}
            <div className="flex absolute -right-8 top-0 -translate-y-1/2">
              <div className="left-tri" />
              <div className="h-[50px] bg-[#d8739b] flex items-center justify-start font-bold text-white pr-10 text-[18px] text-nowrap">
                Alternative Options
              </div>
            </div>
            <div className="mt-2 font-medium text-pretty">
              {data.parsed_data.alternative_options.replace("- ", "")}
            </div>
          </div>

          {/* 하얀 박스 sdfsdfsdf */}
          <div className="rounded-2xl shadow-xl p-[30px] bg-white mb-8 relative pb-[16px]">
            {/* 빨간색으으으으으으 */}
            <div className="flex absolute -left-8 top-0 -translate-y-1/2">
              <div className="h-[50px] bg-[#d8739b] flex items-center justify-end font-bold text-white pl-10 text-[18px]">
                Additional Information
              </div>
              <div className="right-tri" />
            </div>
            <div className="mt-2 font-medium text-pretty">
              {data.parsed_data.additional_information.replace("- ", "")}
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
                <span className="font-semibold text-lg">
                  {data.nutrient_table["Amount per 100g"][1].replace("g", "")}
                </span>
              </div>
              <div className="flex flex-col justify-between h-[60px] text-center">
                <span></span>
                <span className="text-lg">:</span>
              </div>
              <div className="flex flex-col justify-between h-[60px] text-center">
                <span className="text-[#718093] font-semibold text-lg">
                  Protein
                </span>
                <span className="font-semibold text-lg">
                  {data.nutrient_table["Amount per 100g"][2].replace("g", "")}
                </span>
              </div>
              <div className="flex flex-col justify-between h-[60px] text-center">
                <span></span>
                <span className="text-lg">:</span>
              </div>
              <div className="flex flex-col justify-between h-[60px] text-center">
                <span className="text-[#718093] font-semibold text-lg">
                  Fat
                </span>
                <span className="font-semibold text-lg">
                  {data.nutrient_table["Amount per 100g"][3].replace("g", "")}
                </span>
              </div>
            </div>
            {/* 그래프 */}
            <div className="relative">
              <div className="h-[140px] flex justify-center items-center  relative">
                <PieChart
                  className="donutParent absolute left-0 -top-5 mt-16"
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: +data.nutrient_table[
                            "Amount per 100g"
                          ][2].replace("g", ""),
                          label: "Protein",
                          color: "#F8A5C2",
                        },
                        {
                          id: 1,
                          value: +data.nutrient_table[
                            "Amount per 100g"
                          ][3].replace("g", ""),
                          label: "Fat",
                          color: "#FFD7F8",
                        },
                        {
                          id: 2,
                          value: +data.nutrient_table[
                            "Amount per 100g"
                          ][1].replace("g", ""),
                          label: "Carbs",
                          color: "#E86A9C",
                        },
                      ],
                    },
                  ]}
                  width={230}
                  height={200}
                />
                {/* <div className="whiteDonut"></div> */}
                {/* <div className="absolute right-0 bottom-3 w-[200px] h-[100px] flex flex-col justify-between py-2">
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
              </div> */}
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
      ) : (
        <>
          <div className="justify-center items-center text-2xl flex flex-col gap-8">
            <span>{search} Loading...</span>
            <div className="w-8 h-2 bg-pink-300 animate-spin" />
          </div>
        </>
      )}
    </form>
  );
}
