import NavBar from "@/components/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <header className="w-full h-[100px] bg-[#FFE6EF] flex justify-between items-center py-[20px] px-[40px] flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="text-[20px] font-bold">Home</div>
          <div className="flex justify-between gap-[15px]">
            <div className="w-[100px] h-[30px] bg-[#F8A5C2] text-white flex justify-center items-center font-bold text-[20px] rounded-2xl">
              250
            </div>
            <Image
              width={100}
              height={100}
              alt="mypage"
              src={"/mypage.png"}
              className="size-[27px]"
            />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center border-2 w-full h-[55px] text-[#B8B9BE] rounded-xl relative text-[18px]">
          Continue with Google
        </div>
      </header>
      <h1>HomePage</h1>
    </>
  );
}
