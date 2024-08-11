import Header from '@/components/header';
import Image from 'next/image';

export default function GuideLinePage() {
  return (
    <>
      <Header title={'Guildline'} />
      <main className="px-[40px] pt-[20px] flex flex-col gap-[30px] ">
        <div>
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image width={36} height={36} alt="lv1" src="/lv1.png" />
            <span className="font-semibold">Lv. 1</span>
            <span className="text-[#237F31] font-semibold">Optimal Foods</span>
          </div>
          <div className="mt-[16px] flex justify-between">
            <div className="text-[15px]">
              <p>High in essential nutrients</p>
              <p>Safe to consume</p>
              <p>
                Examples: leafy greens, salmon (low-mercury), lean meats, whole
                grains, fruits, pasteurized dairy
              </p>
            </div>
            <Image
              width={78}
              height={78}
              alt="lv1"
              src="/lv1.png"
              className="size-[78px]"
            />
          </div>
        </div>
        <div>
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image width={36} height={36} alt="lv2" src="/lv2.png" />
            <span className="font-semibold">Lv. 2</span>
            <span className="text-[#549320] font-semibold">
              Generally Good Food
            </span>
          </div>
          <div className="mt-[16px] flex justify-between">
            {' '}
            <Image
              width={78}
              height={78}
              alt="lv2"
              src="/lv2.png"
              className="size-[78px]"
            />
            <div className="text-[15px]">
              <p>Nutritious but may need moderation</p>
              <p>Safe when properly prepared</p>
              <p>
                Examples: eggs (fully cooked), nuts, legumes, moderate caffeine
                (1-2 cups coffee/day)
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image width={36} height={36} alt="lv3" src="/lv3.png" />
            <span className="font-semibold">Lv. 3</span>
            <span className="text-[#B4A304] font-semibold">neutral Food</span>
          </div>
          <div className="mt-[16px] flex justify-between">
            <div className="text-[15px]">
              <p>Neither particularly beneficial nor harmful</p>
              <p>Safe in moderation</p>
              <p>Examples: white bread, pasta, rice</p>
            </div>
            <Image
              width={78}
              height={78}
              alt="lv3"
              src="/lv3.png"
              className="size-[78px]"
            />
          </div>
        </div>
        <div>
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image width={36} height={36} alt="lv4" src="/lv4.png" />
            <span className="font-semibold">Lv. 4</span>
            <span className="text-[#B35E07] font-semibold">Food to Limit</span>
          </div>
          <div className="mt-[16px] flex justify-between">
            {' '}
            <Image
              width={78}
              height={78}
              alt="lv4"
              src="/lv4.png"
              className="size-[78px]"
            />
            <div className="text-[15px] p-[5px]">
              <p>May pose minor risks or lack significant nutritional value</p>
              <p>
                Examples: processed foods, high-sugar snacks, artificial
                sweeteners
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[36px] w-fit bg-[#EAEAED] rounded-3xl flex pr-6 items-center gap-2">
            <Image width={36} height={36} alt="lv5" src="/lv5.png" />
            <span className="font-semibold">Lv. 5</span>
            <span className="text-[#AE0414] font-semibold">Food to Avoid</span>
          </div>
          <div className="mt-[16px] flex justify-between">
            <div>
              <p>Pose significant risks to maternal or fetal health</p>
              <p>
                Examples: raw/undercooked meats, high-mercury fish,
                unpasteurized dairy, alcohol, raw sprouts
              </p>
            </div>
            <Image
              width={78}
              height={78}
              alt="lv3"
              src="/lv5.png"
              className="size-[78px]"
            />
          </div>
        </div>
      </main>
    </>
  );
}
