import React from "react";
import { FaMountainCity } from "react-icons/fa6";
import { GiSpookyHouse, GiWaterBolt, GiWaterfall } from "react-icons/gi";
import { MdMusicNote } from "react-icons/md";

type EventType = {
  icon: React.ReactNode;
  title: string;
  date: string;
}[];

const events: EventType = [
  {
    icon: <GiWaterfall />,
    title: "Garden BBQ",
    date: "5at 16 june , Tom's Garden",
  },
  {
    icon: <FaMountainCity />,
    title: "City council Vote",
    date: "5at 16 june , Town Hall",
  },
  {
    icon: <MdMusicNote />,
    title: "Post-punk Festival",
    date: "5at 16 june , Tom's Garden",
  },
  {
    icon: <GiWaterBolt />,
    title: "Maybe Boring Stand-up",
    date: "5at 16 june , Tom's Garden",
  },
  {
    icon: <GiSpookyHouse />,
    title: "Yebounce Tour 2023",
    date: "5at 16 june , Tom's Garden",
  },
];

const Events = () => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-3 w-full h-fit p-4 pb-6">
      {/* _________________ upcomming events _________________ */}
      <h3 className="font-bold mb-2">Your upcomming events</h3>
      {events.map((item, i) => (
        <div key={i} className="">
          <div className="flex items-center gap-2 hover:bg-gray-100 p-2 cursor-pointer rounded-md">
            <p className="p-3  shadow-lg rounded-full text-blue-400">
              {item.icon}
            </p>
            <div className="">
              <h3 className="text-black/90 text-[16px]">{item.title}</h3>
              <p className="text-[12px] text-gray-500 mt-[-3px]">{item.date}</p>
            </div>
          </div>
          {i < events.length - 1 && (
            <hr className="text-gray-200 my-1 m-auto w-2/3 " />
          )}
        </div>
      ))}
    </div>
  );
};

export default Events;
