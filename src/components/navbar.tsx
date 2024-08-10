import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const router = usePathname();
  return (
    <div className="w-full h-[55px] absolute bottom-0 flex justify-around items-end pb-[15px]">
      <Image
        width={100}
        height={100}
        alt="house"
        src={'/house.png'}
        className="w-[21px] h-[26px] border-2 border-red-400"
      />{' '}
      <Image
        width={100}
        height={100}
        alt="calandar"
        src={'/calendar.png'}
        className="w-[21px] h-[26px] border-2 border-red-400"
      />
      {router === '/kick' ? (
        <Image
          width={100}
          height={100}
          alt="pig"
          src={'/graypig.png'}
          className="w-[97px] h-[73px] border-2 border-red-400"
        />
      ) : (
        <Image
          width={100}
          height={100}
          alt="pig"
          src={'/pig.png'}
          className="w-[97px] h-[73px] border-2 border-red-400"
        />
      )}
      <Image
        width={100}
        height={100}
        alt="chat"
        src={'/chat.png'}
        className="w-[39px] h-[30px] border-2 border-red-400"
      />
      <Image
        width={100}
        height={100}
        alt="more"
        src={'/more.png'}
        className="w-[27px] h-[27px] border-2 border-red-400"
      />
    </div>
  );
}
