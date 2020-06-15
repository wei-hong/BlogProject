import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, handleDelete }) => {
  return (
    <div className="mx-auto">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PostList;
