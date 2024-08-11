import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';

export default function Welfare() {
  return (
    <>
      <Header title={'Public Welfare'} />
      <div className="w-full flex flex-col justify-center p-[40px]">
        <section className=" h-[174px] rounded-2xl translate-y-[-80px] kick-box bg-white p-[20px] mt-[100px] bg-white flex flex-col gap-[12px] relative">
          <div className="text-[#E86B9C]">First Meeting Voucher</div>
          <div className="text-[11px]">
            A First Meeting Voucher of over 2 million won will be provi- ded to
            newborns to alleviate the economic burden associ- ated with early
            childhood care.
          </div>
          <div>
            <Link
              href={
                'https://m.bokjiro.go.kr/ssis-tem/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004656&wlfareInfoReldBztpCd=01'
              }
              className="w-[100px] h-[30px] bg-[#FFDD59] rounded-xl text-[#444444] absolute bottom-[10px] right-[10px]"
            >
              See more
            </Link>
          </div>
        </section>
        <section className=" h-[174px] rounded-2xl translate-y-[-80px] kick-box bg-white p-[20px] mt-[100px] bg-white flex flex-col gap-[12px] relative">
          <div className="text-[#E86B9C]">
            Maternal & Newborn Health Care Support Program
          </div>
          <div className="text-[11px]">
            By dispatching health care professionals to households with
            newborns, we support postpartum care, enhance the health of mothers
            and infants, and reduce the financial burden on families.
          </div>
          <div>
            <Link
              href={
                'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001188&wlfareInfoReldBztpCd=01'
              }
              className="w-[100px] h-[30px] bg-[#FFDD59] rounded-xl text-[#444444] absolute bottom-[10px] right-[10px]"
            >
              See more
            </Link>
          </div>
        </section>
        <section className=" h-[174px] rounded-2xl translate-y-[-80px] kick-box bg-white p-[20px] mt-[100px] bg-white flex flex-col gap-[12px] relative">
          <div className="text-[#E86B9C]">
            Pregnancy and Childbirth Expenses Support
          </div>
          <div className="text-[11px]">
            It covers medical costs for pregnant or postpartum aid recipients
            and their infants, boosting health and welfare for low-income
            families.
          </div>
          <div>
            <Link
              href={
                'https://m.bokjiro.go.kr/ssis-tem/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00000061&wlfareInfoReldBztpCd=01'
              }
              className="w-[100px] h-[30px] bg-[#FFDD59] rounded-xl text-[#444444] absolute bottom-[10px] right-[10px]"
            >
              See more
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
