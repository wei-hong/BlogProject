import React, { useState } from "react";
import Post from "./post/Posts";
import { getFirebase } from "./../firebase/firebase";
const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("dateFormatted")
      .on("value", (snapshot) => {
        let posts = [];
        snapshot.forEach((item) => {
          posts.push(item.val());
        });

        const newestFirst = posts.reverse();

        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <Post posts={blogPosts} />;
};

export default Home;
