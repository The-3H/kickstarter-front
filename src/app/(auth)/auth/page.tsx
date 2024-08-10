import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <div className="mt-24 w-32 h-32 bg-purple-200 rounded-full" />
      <div className="mb-16" />
      <div className="cursor-pointer flex justify-center items-center border-2 w-full h-[55px] text-[#B8B9BE] rounded-xl relative text-[18px]">
        <Image
          src="/google.png"
          alt="Google Icon"
          width={28}
          height={28}
          className="absolute left-12"
        />
        Continue with Google
      </div>
      <div className="mb-2" />
      <div className="cursor-pointer flex justify-center items-center text-[18px] w-full h-[55px] text-[#B8B9BE] rounded-xl relative bg-black">
        <Image
          src="/apple.png"
          alt="Apple Icon"
          width={28}
          height={28}
          className="absolute left-12"
        />
        Continue with Apple
      </div>
    </div>
  );
}
