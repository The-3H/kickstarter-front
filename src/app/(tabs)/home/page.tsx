"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function getDaysSince(dateString: string) {
  // 주어진 날짜 문자열을 Date 객체로 변환
  const givenDate = new Date(dateString);

  // 현재 날짜
  const currentDate = new Date();

  // 두 날짜 간의 차이를 밀리초 단위로 계산
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // 밀리초를 일 수로 변환
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
}

export default function HomePage() {
  const [day, setDay] = useState<string>("");

  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const dateString = localStorage.getItem("pregnancy")!;
    const daysPassed = getDaysSince(dateString);
    setDay(`Day ${daysPassed}`);
  }, []);
  return (
    <form
      className="bg-[#FFE6EF] h-screen p-[40px] flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/result?search=${keyword}`);
      }}
    >
      <h3 className="text-[40px] text-pretty font-serif font-bold mr-16">
        What do you want to eat?
      </h3>
      <div className="w-full flex items-center relative gap-2 mt-4">
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
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          required
        />
      </div>
      <div className="h-[400px] mt-16">
        <div
          className="absolute top-[100px] translate-y-1/2 left-0 w-full h-[370px] flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url('https://imagedelivery.net/CJyrB-EkqcsF2D6ApJzEBg/2f88a789-702d-4a8a-f798-f9ed5bca6700/public')`,
          }}
        >
          <Image
            className="absolute bottom-1/3 z-10"
            width={200}
            height={200}
            alt="baby"
            src="/baby.png"
          />
          <Image
            className="absolute top-[54px] right-[100px]"
            width={80}
            height={80}
            alt="party1"
            src="/party-1.png"
          />
          <Image
            className="absolute top-[56px] left-[60px]"
            width={80}
            height={80}
            alt="party2"
            src="/party-2.png"
          />
          <div className="absolute -top-2 right-10 text-black bg-white py-3 rounded-3xl px-6 font-extrabold shadow-lg">
            {day}
          </div>
        </div>
      </div>
      <div className="size-[1200px] bg-white rounded-full absolute top-[570px] -left-96" />
      <div className="absolute top-[640px] text-[20px] w-[420px] text-center">
        <div className="px-[30px] mb-6">
          Your little miracle is growing, and so are your savings!
        </div>
        <div className="text-[20px] w-full bg-[#FFDD5A] flex justify-center py-3 items-center rounded-3xl">
          <div className="bg-white py-1 px-3 rounded-2xl">$ 400</div>
          <div className="ml-2"> saved for a brighter future</div>
        </div>
      </div>
    </form>
  );
}
