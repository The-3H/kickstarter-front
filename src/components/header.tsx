import Image from 'next/image';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full h-[55px] bg-[#FFE6EF] flex justify-between items-center py-[20px] px-[40px]">
      <div className="text-[20px] font-bold">{title}</div>
      <div className="flex justify-between gap-[15px]">
        {/* <div className="w-[100px] h-[30px] bg-[#F8A5C2] text-white flex justify-center gap-[7px] items-center font-bold text-[20px] rounded-2xl">
          <Image
            width={100}
            height={100}
            alt="coin"
            src={'/coin.png'}
            className="size-[20px]"
          />
          <div>250</div>
        </div> */}
        <Image
          width={100}
          height={100}
          alt="mypage"
          src={'/mypage.png'}
          className="size-[27px]"
        />
      </div>
    </header>
  );
}
