import LeftBubble from '@/components/chat/left';
import RightBubble from '@/components/chat/right';
import Header from '@/components/header';
import Image from 'next/image';

export default function ChatPage() {
  return (
    <>
      <Header title={'Dr. AI'} />
      <main className="overflow-scroll w-full h-full px-[40px] flex flex-col gap-[15px] pb-[300px] pt-[50px] scrollbar-hide">
        <LeftBubble />
        <RightBubble />
        <RightBubble />
        <RightBubble />
        <LeftBubble />
        <LeftBubble />
        <LeftBubble />
        <LeftBubble />
        <RightBubble />
        <RightBubble />
        <LeftBubble />
        <LeftBubble />
        <RightBubble />
        <RightBubble />
      </main>
      <section className=" w-full h-[190px] -pt-[30px]  px-[40px] border-[#DCDDE1CC] border-t-2 absolute bottom-[50px] flex flex-col gap-[12px] justify-center items-center bg-white">
        <div className="flex gap-[12px] items-center">
          <input
            type="text"
            placeholder="Message"
            className="w-[300px] h-[45px] rounded-2xl py-[12px] px-[22px] border-2 border-[#DCDDE1CC]"
          />
          <div className="size-[30px] bg-gray-200 rounded-full"></div>
        </div>
        <p className="text-[#DCDDE1] text-[11px] w-[260px] ">
          DISCLAIMER: ChatGPT may produce inaccurate information about people,
          places, or facts
        </p>
      </section>
    </>
  );
}
