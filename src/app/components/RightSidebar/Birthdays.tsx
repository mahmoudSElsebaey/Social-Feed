import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="bg-white shadow-md rounded-lg w-full h-fit p-4">
      <h3 className="font-bold mb-2">Birthdays</h3>
      {/*______________ 20 August Birthdays  ______________*/}
      <h4 className="text-[14px] italic">20 August</h4>
      <div className="flex items-center gap-2  hover:bg-gray-100 cursor-pointer p-2 rounded-md">
        <Image
          src="/assets/img1.jpg"
          alt="user image"
          width={100}
          height={100}
          className="w-6 h-6 rounded-full"
        />
        <div className="">
          <h3 className="text-black/90">Bob Hammouda</h3>
          <p className="text-[12px] text-gray-500 mt-[-3px]">
            turning 25 years old
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2  hover:bg-gray-100 cursor-pointer p-2 rounded-md">
        <Image
          src="/assets/img2.jpg"
          alt="user image"
          width={100}
          height={100}
          className="w-6 h-6 rounded-full"
        />
        <div className="">
          <h3 className="text-black/90">Harrper Mitchell</h3>
          <p className="text-[12px] text-gray-500 mt-[-3px]">
            turning 22 years old
          </p>
        </div>
      </div>
      {/*______________ 21 August Birthdays  ______________*/}
      <h4 className="text-[14px] italic">21 August</h4>
      <div className="flex items-center gap-2  hover:bg-gray-100 cursor-pointer p-2 rounded-md">
        <Image
          src="/assets/img7.jpg"
          alt="user image"
          width={100}
          height={100}
          className="w-6 h-6 rounded-full"
        />
        <div className="">
          <h3 className="text-black/90">Sara billfrina</h3>
          <p className="text-[12px] text-gray-500 mt-[-3px]">
            turning 30 years old
          </p>
        </div>
      </div>
      {/*______________ 9 september Birthdays  ______________*/}
      <h4 className="text-[14px] italic">9 september</h4>
      <div className="flex items-center gap-2   hover:bg-gray-100 cursor-pointer p-2 rounded-md">
        <Image
          src="/assets/img4.jpg"
          alt="user image"
          width={100}
          height={100}
          className="w-6 h-6 rounded-full"
        />
        <div className="">
          <h3 className="text-black/90">Jolly Raslaan </h3>
          <p className="text-[12px] text-gray-500 mt-[-3px]">
            turning 25 years old
          </p>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
