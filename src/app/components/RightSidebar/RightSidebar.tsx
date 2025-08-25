import Chats from "./ChatsSidebar";
import Events from "./Events";
import Birthdays from "./Birthdays";

const RightSidebar = () => {
  return (
    <div className="hidden h-screen right-0 lg:flex gap-3 w-full ">
      <div className="w-[55%]">
        <div className="flex flex-col items-center gap-3">
          <Events />
          <Birthdays />
        </div>
      </div>
      <div className="w-[45%]">
        <Chats />
      </div>
    </div>
  );
};

export default RightSidebar;
