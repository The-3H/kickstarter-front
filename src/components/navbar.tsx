import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const router = usePathname();
  const r = useRouter();
  return (
    <div className="w-full h-[55px] absolute bottom-0 flex justify-around items-end pb-[15px] bg-white">
      <Image
        width={100}
        height={100}
        alt="house"
        src={"/house.png"}
        className="w-[21px] h-[26px] cursor-pointer"
        onClick={() => r.push("/home")}
      />
      <Image
        width={100}
        height={100}
        alt="calandar"
        src={"/calendar.png"}
        className="w-[21px] h-[26px] cursor-pointer"
        onClick={() => r.push("/guideline")}
      />
      {router === "/kick" ? (
        <Image
          width={100}
          height={100}
          alt="pig"
          src={"/graypig.png"}
          className="w-[97px] h-[73px] cursor-pointer"
        />
      ) : (
        <Image
          width={100}
          height={100}
          alt="pig"
          src={"/pig.png"}
          className="w-[97px] h-[73px] cursor-pointer"
          onClick={() => r.push("/kick")}
        />
      )}
      <Image
        width={100}
        height={100}
        alt="chat"
        src={"/chat.png"}
        className="w-[39px] h-[30px] cursor-pointer"
        onClick={() => r.push("/chat")}
      />
      <Image
        width={100}
        height={100}
        alt="more"
        src={"/more.png"}
        className="w-[27px] h-[27px] cursor-pointer"
        onClick={() => r.push("/more")}
      />
    </div>
  );
}
