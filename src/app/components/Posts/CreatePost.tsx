import Image from "next/image";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachment, MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const icons: { icon: React.ReactNode }[] = [
  { icon: <MdOutlinePhotoSizeSelectActual /> },
  { icon: <MdOutlineAttachment  /> },
  { icon: <CiLocationOn /> },
  { icon: <BsEmojiSmile /> },
];


const CreatePost = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3">
      <div className="flex items-center gap-3 mb-4">
        {/*_________________ User Profile Image _________________*/}
        <Image
          src="/assets/img1.jpg"
          alt="User Avatar profile image"
          width={50}
          height={50}
          className="w-10 h-10 rounded-full"
        />
        {/*_________________ Input field _________________*/}
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none"
        />
      </div>

      {/*_________________ Action Buttons _________________*/}
      <div className="flex items-center justify-between pt-3">
        <ul className="flex items-center gap-2 text-2xl text-gray-600">
          {icons.map((item, i) => (
            <li key={i} className=" hover:text-blue-500 cursor-pointer">
              {item.icon}
            </li>
          ))}
        </ul>

        {/*_________________ Post Button _________________*/}
        <button className=" text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer px-8 py-1 rounded-full transition-all ">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
