import Image from "next/image";
import { BiBell, BiSearch } from "react-icons/bi";
import { IoChatbubblesOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300/50 bg-white sticky top-0 z-50">
      {/*_________________ Logo _________________*/}
      <h1 className="text-lg sm:text-xl font-bold text-blue-600">Connected</h1>

      {/*_________________ Search Bar _________________*/}
      <div className="flex-1 max-w-xs sm:max-w-xl mx-4 sm:mx-6">
        <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100">
          <BiSearch size={16} sm-size={20} />
          <input
            type="text"
            placeholder="Type in search"
            className="w-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/*_________________ Icons + User _________________*/}
      <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base">
        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <IoChatbubblesOutline size={16} sm-size={20} />
        </button>
        <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <BiBell size={16} sm-size={20} />
        </button>
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <Image
            src="/assets/img1.jpg"
            alt="User Profile Image"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          />
          <span className="hidden sm:inline">Ben Goro</span>
        </div>
      </div>
    </header>
  );
}
