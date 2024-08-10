export default function Page1() {
  return (
    <div className="px-[40px] bg-[#FFE6EF] h-full">
      <div>
        <p className="text-[24px] pt-[155px]">Welcome!</p>
        <p>
          Your{' '}
          <span className="text-[#E86B9C] text-[20px]">little miracle</span>{' '}
          starts here..
        </p>
      </div>
      <div className="mt-[93px] text-[20px] text-[#707070]">
        <p>How can I call you?</p>
        <input
          type="text"
          className="w-full h-[50px] bg-inherit border-b-2 border-black focus:outline-none text-black"
          required
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[370px] flex justify-center items-end"
        style={{
          backgroundImage: `url('https://imagedelivery.net/CJyrB-EkqcsF2D6ApJzEBg/2f88a789-702d-4a8a-f798-f9ed5bca6700/public')`,
        }}
      >
        <button className="bg-white w-[315px] h-[55px] mb-[20px] rounded-xl">
          Next
        </button>
      </div>
    </div>
  );
}
