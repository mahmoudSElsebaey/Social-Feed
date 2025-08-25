
import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoChatbubblesOutline, IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdOutlineAmpStories } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { VscListFlat } from "react-icons/vsc";

// Favorites list
type FavoriteType = {
  icon: React.ReactNode;
  label: string;
}[];
const favorites: FavoriteType = [
  { icon: <IoChatbubblesOutline size={18} />, label: "Messages" },
  { icon: <LuUsers size={18} />, label: "Friends" },
  { icon: <VscListFlat size={18} />, label: "Feed" },
  { icon: <MdOutlineAmpStories size={18} />, label: "Stories" },
  { icon: <RxCalendar size={18} />, label: "Events" },
  { icon: <HiOutlineLightBulb size={18} />, label: "Memories" },
];

//_________________ Groups list
type GroupType = {
  img: string;
  label: string;
}[];
const groups: GroupType = [
  { img: "/assets/img3.jpg", label: "Dog Lovers" },
  { img: "/assets/img2.jpg", label: "GamerZzZ" },
  { img: "/assets/img5.jpg", label: "Travel Girls." },
  { img: "/assets/img4.jpg", label: "cat memez" },
];

export default function LeftSidebar() {
  return (
 
    <aside className="hidden lg:block w-full p-4 h-full shadow-md rounded-b-lg bg-white ">
      {/*_________________ Top section (Home + Profile) _________________*/}
      
      <div className="flex flex-col">
        <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2  rounded-lg cursor-pointer">
          <IoHomeOutline size={18} /> <span className="text-sm">Home</span>
        </button>
        <button className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
          {/*_________________ Profile image _________________*/}
          <Image
            src="/assets/img1.jpg"
            alt="profile Image"
            width={50}
            height={50}
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm">Profile</span>
        </button>
      </div>
      <hr className="my-1 text-gray-300/50 mb-3" />

      {/*_________________ Favorites Section _________________*/}
      <h3 className="text-md mb-1 font-bold">Favorites</h3>

      <ul className="flex flex-col">
        {favorites.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            {item.icon} {/*_________________ Icon _________________*/}
            <span className="text-sm">{item.label}</span> {/*_________________ Label _________________*/}
          </li>
        ))}
      </ul>
      <hr className="my-1 text-gray-300/50 mb-3" />

      {/*_________________ Groups Section _________________*/}
      <h3 className=" text-md mb-1 font-bold">Groups</h3>
      <ul className="flex flex-col">
        {groups.map((group, i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            {/*_________________ Group image _________________*/}
            <Image
              src={group.img}
              alt={group.label}
              width={50}
              height={50}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm">{group.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
