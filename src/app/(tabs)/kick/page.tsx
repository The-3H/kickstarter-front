import Header from '@/components/header';
import { url } from 'inspector';
import Image from 'next/image';

export default function KickPage() {
  return (
    <>
      <Header title={'Kick'} />
      {/* <div className="h-[72px] bg-[#FFE6EF]"></div> */}
      <main className="p-[40px] flex flex-col justify-center gap-[39px] mt-[72px]">
        <section className="w-full h-[174px] rounded-2xl translate-y-[-80px] kick-box bg-white p-[20px]">
          <p className="text-[18px] font-bold">Healthy savings account</p>
          <p className="text-[#949DA8] text-[16px] mt-[18px] font-bold">
            Current Balance
          </p>
          <div className="flex justify-between w-full mt-[6px]">
            <div className="text-[20px] flex justify-between gap-[5px]">
              <Image
                width={100}
                height={100}
                alt={'coin'}
                src={'/coin.png'}
                className="size-[22px]"
              />
              <p className="text-[#F78FB3]">250</p>
            </div>
            <p className="text-[13pt] text-[#B8B9BE]">Goal : $ 400</p>
          </div>
          <div className="h-[6px] w-full bg-[#FFE6EF] rounded-md mt-[7px]"></div>
        </section>
        <div className="w-full flex justify-between kick-container text-[14px] ">
          <div
            className="w-[180px] h-[200px] rounded-3xl border-2 border-[#0000004D] p-[20px] text-white flex items-end font-extrabold kick-image relative overflow-hidden"
            style={{
              objectFit: 'cover',
              backgroundImage: `url('https://imagedelivery.net/CJyrB-EkqcsF2D6ApJzEBg/e53f3db7-819f-46d5-3b50-66a8ca4f5300/public')`,
              backgroundSize: 'cover',
            }}
          >
            <div className="z-10">
              <p>Donate to</p>
              <p>Single Moms</p>
            </div>
          </div>
          <div
            className="w-[180px] h-[200px] rounded-3xl border-2 border-[#0000004D] p-[20px] text-white flex items-end font-extrabold kick-image relative overflow-hidden"
            style={{
              objectFit: 'cover',
              backgroundImage: `url('https://imagedelivery.net/CJyrB-EkqcsF2D6ApJzEBg/e480dd62-46ea-4466-e8a7-ea6320a36a00/public')`,
              backgroundSize: 'cover',
            }}
          >
            <div className="z-10">
              <p>Donate to</p>
              <p>Children</p>
            </div>
          </div>
        </div>
        <Image
          width={200}
          height={200}
          alt="coinpig"
          src={'/coinpig.png'}
          className="w-[300px] mx-[50px]"
        />
      </main>
    </>
  );
}
