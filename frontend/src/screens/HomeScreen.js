import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import BlogPosts from "../components/BlogPosts";

import { getPosts } from "../redux/actions/postActions";

// import "./../App.css";
// import "./assets/bootstrap.min.css";
// import "./assets/fontawesome/css/all.min.css";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const Posts = useSelector((state) => state.Posts);
  const { posts, loading, error } = Posts;
  useEffect(() => {
    dispatch(getPosts());
    console.log(posts);
  }, [dispatch]);
  
  return (
    <div>
      <div class="container-fluid">
        <main class="tm-main">
          <SearchBar />
          <BlogPosts data={posts} />
          <Footer />
        </main>
      </div>
    </div>
  );
};
export default HomeScreen;
