import LeftSidebar from "./components/LeftSidebar/Sidebar";
import Posts from "./components/Posts/Posts";
import RightSidebar from "./components/RightSidebar/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center gap-3">
        <div className=" w-[0%] lg:w-[18%] hidden lg:block sticky top-0 h-screen">
          <LeftSidebar />
        </div>
        <div className="sm:w-[96%] md:w-[90%] lg:w-[45%] ">
          <Posts />
        </div>
        <div className=" w-[0%] lg:w-[38%] hidden lg:block sticky top-[-130px] h-screen">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
