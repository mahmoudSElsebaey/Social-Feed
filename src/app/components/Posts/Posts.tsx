import CreatePost from "./CreatePost";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="w-full mt-3 lg:mx-0">
      <CreatePost />
      <PostCard />
    </div>
  );
};

export default Posts;
