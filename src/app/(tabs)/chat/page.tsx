import LeftBubble from "@/components/chat/left";
import RightBubble from "@/components/chat/right";
import Image from "next/image";

export default function ChatPage() {
  return (
    <>
      <header className="w-full h-[55px] bg-[#FFE6EF] flex justify-between items-center py-[20px] px-[40px]">
        <div className="text-[20px] font-bold">Dr. AI</div>
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
      </header>
      <main className="overflow-scroll w-full px-[40px] flex flex-col gap-[15px]">
        <LeftBubble />
        <RightBubble />
      </main>
      <section className=" w-full h-[110px] py-[15px] px-[40px] border-[#DCDDE1CC] border-t-2 absolute bottom-0 flex flex-col gap-[12px] justify-center items-center">
        <div className="flex gap-[12px] items-center">
          <input
            type="text"
            placeholder="Message"
            className="w-[300px] h-[45px] rounded-2xl py-[12px] px-[22px] border-2 border-[#DCDDE1CC]"
          />
          <div className="size-[30px] bg-gray-200 rounded-full"></div>
        </div>
        <p className="text-[#DCDDE1] text-[11px] w-[260px]">
          DISCLAIMER: ChatGPT may produce inaccurate information about people,
          places, or facts
        </p>
      </section>
    </>
  );
}
