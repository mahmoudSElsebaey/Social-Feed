import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className=" w-full mt-3 ml-[10%] lg:mx-0">
      <CreatePost />
      <PostCard />
    </div>
  );
};

export default Posts;
