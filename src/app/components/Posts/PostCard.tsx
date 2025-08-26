"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const PostCard = () => {
  const [posts, setPosts] = useState<any[]>([]);
  // _________________ Fetch posts _________________
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/Data/posts.json");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  // _________________ Format date _________________
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${weekday} , ${day} ${month}  ${time}`;
  };

  return (
    <>
      {posts.map((item) => (
        //__________________________________ Post Card __________________________________
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-3 w-full  mx-auto"
        >
          {/*_________________ Post header _________________*/}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src={item.author.avatarUrl}
                alt={item.author.name}
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
              />
              <div className="text-black">
                <h3 className="text-xs sm:text-sm">{item.author.name}</h3>
                <span className="text-gray-400 text-[10px] sm:text-xs">
                  {formatDate(item.timestamp)}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="text-gray-600 ml-auto mt-[-8px] sm:mt-[-10px] cursor-pointer text-xl sm:text-2xl"
            >
              ...
            </button>
          </div>

          {/*_________________ Post Content _________________*/}
          <p className="my-1 sm:my-2 text-[12px] sm:text-sm">
            {item.post.text}
          </p>

          {/*_________________ Post Images _________________*/}
          {item.post.images.length > 0 && (
            <div
              className="grid gap-2 sm:gap-3 mt-2 py-2 sm:py-4"
              style={{
                gridTemplateColumns: `repeat(${item.post.images.length}, minmax(0, 1fr))`,
              }}
            >
              {item.post.images.map((img: string, i: number) => (
                <div key={i} className="w-full h-24 sm:h-40 relative">
                  <Image
                    src={img}
                    fill
                    alt="post image"
                    className="object-cover rounded-sm"
                  />
                </div>
              ))}
            </div>
          )}

          {/*_________________ Post interactions _________________*/}
          <div className="flex items-center justify-between mt-2 text-[12px] sm:text-sm">
            <div className="flex items-center gap-1 sm:gap-2 text-blue-500 cursor-pointer">
              <AiOutlineLike size={18} />
              <p>Liked</p>
              <p className="bg-gray-200/70 px-2 rounded-full text-[10px] sm:text-xs">
                {item.post.likes}
              </p>
            </div>
            <div className="flex gap-2 sm:gap-5">
              <div className="flex items-center gap-1 sm:gap-1 text-gray-500 cursor-pointer">
                <IoChatbubbleEllipsesOutline size={18} />
                <p>Comment</p>
                <p className="bg-gray-200/70 px-2 rounded-full text-[10px] sm:text-xs">
                  {item.post.comments}
                </p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-gray-500 cursor-pointer">
                <CiShare2 size={18} />
                <p>Share</p>
                <p className="bg-gray-200/70 px-2 rounded-full text-[10px] sm:text-xs">
                  {item.post.shares}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCard;
