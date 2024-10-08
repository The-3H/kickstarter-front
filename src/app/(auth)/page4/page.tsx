'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page4() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push('/home');
      }}
      className="px-[40px] bg-[#FFE6EF] h-full"
    >
      <div>
        <div>
          <div className="text-[20pt] pt-[200px] mb-[15px]">Almost There!</div>
          <div className="flex gap-[10px] items-center text-[14pt] text-[#707070] mb-[16px]">
            <input type="checkbox" name="" id="" required />
            <p>Consent to personal data collection and use</p>
          </div>
          <div className="flex gap-[10px] items-center text-[14pt] text-[#707070]">
            <input type="checkbox" name="" id="" required />
            <p>Consent to process sensitive information</p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[370px] flex flex-col justify-end items-center"
        style={{
          backgroundImage: `url('https://imagedelivery.net/CJyrB-EkqcsF2D6ApJzEBg/2f88a789-702d-4a8a-f798-f9ed5bca6700/public')`,
        }}
      >
        <div className="p-[40px] text-[18pt] text-[#444444]">
          <p>Ready to make healthy choices</p>
          <p>for you, your baby, and </p>
          <p>out community?</p>
        </div>
        <button className="bg-white w-[315px] h-[55px] mt-[16px] mb-[20px] rounded-xl">
          Start
        </button>
      </div>
    </form>
  );
}
