import Image from "next/image";
// _________________ data _________________
type MainType = {
  img: string;
  label: string;
}[];
const chats: MainType = [
  { img: "/assets/dog.png", label: "Dog Lovers" },
  { img: "/assets/travel.jpg", label: "Copenhagen friends" },
  { img: "/assets/cat.jpg", label: "Y2K Car owners" },
];
const groups: MainType = [
  { img: "/assets/img5.jpg", label: "Grill party org" },
  { img: "/assets/img4.jpg", label: "Sneaker freakers" },
  { img: "/assets/img1.jpg", label: "Music in the city" },
  { img: "/assets/zoo1.jpg", label: "School org" },
];
const contacts: MainType = [
  { img: "/assets/img2.jpg", label: "Mark Larsen" },
  { img: "/assets/img3.jpg", label: "Ethean Renolyes" },
  { img: "/assets/img4.jpg", label: "Ava Thompson" },
  { img: "/assets/img5.jpg", label: "Haarper Michal" },
  { img: "/assets/img6.jpg", label: "Pablo Moradona" },
  { img: "/assets/img7.jpg", label: "Islabel Hughus" },
];

const Chats = () => {
  return (
    <div
      className="bg-white w-full p-4  h-fit shadow-md rounded-b-lg"
      style={{ position: "sticky", top: "15px" }}
    >
      {/* _________________ Community Chats _________________ */}
      <h3 className="font-bold">Community Chats</h3>
      {chats.map((item, i) => (
        <div
          className="flex items-center gap-2 my-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md"
          key={i}
        >
          <Image
            src={item.img}
            alt={item.label}
            width={100}
            height={100}
            className="w-6 h-6 rounded-full"
          />
          <p className="text-sm text-gray-600">{item.label}</p>
        </div>
      ))}
      <hr className="my-1 text-gray-300/50 mb-3" />
      {/* _________________ Group Chats _________________ */}
      <h3 className="font-bold">Group Chats</h3>
      {groups.map((item, i) => (
        <div
          className="flex items-center gap-3 my-2 hover:bg-gray-100 cursor-pointer p-2 rounded-md"
          key={i}
        >
          <Image
            src={item.img}
            alt={item.label}
            width={100}
            height={100}
            className="w-6 h-6 rounded-full"
          />
          <p className="text-sm text-gray-600">{item.label}</p>
        </div>
      ))}
      <hr className="my-1 text-gray-300/50 mb-3" />
      {/* _________________ online contacts  _________________ */}
      <h3 className="font-bold">Online Contacts</h3>
      {contacts.map((item, i) => (
        <div
          className="flex items-center gap-2 my-2 hover:bg-gray-100 cursor-pointer px-2 py-[6px] rounded-md"
          key={i}
        >
          <Image
            src={item.img}
            alt={item.label}
            width={100}
            height={100}
            className="w-6 h-6 rounded-full"
          />
          <p className="text-sm text-gray-600">{item.label}</p>
          <div className="w-[7px] h-[7px] bg-green-600 rounded-full ml-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
