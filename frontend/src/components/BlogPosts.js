import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Pagination from "./Pagination";
const BlogPosts = (data) => {
  const Posts = useSelector((state) => state.Posts);
  const { posts } = Posts;
  return (
    <div>
      <div class="row tm-row">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default BlogPosts;
