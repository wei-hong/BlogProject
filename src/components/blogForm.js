import React, { useState } from "react";
import { getFirebase } from "./../firebase/firebase";

const BlogForm = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();
  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${match.params.slug}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  //const posts = blogPost.posts;
  //const post = posts.find((post) => match.params.slug === post.slug);

  return (
    <div
      className="container d-flex"
      style={{ marginTop: "20px", width: "60vw" }}
    >
      <div className="card">
        <img
          className="card-img-top rounded mx-auto d-block "
          style={{ width: "30rem", height: "18rem" }}
          src={currentPost.blogImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{currentPost.blogTitle}</h5>
          <p className="card-text text-justify">{currentPost.blogText}</p>

          <p className="text-right font-weight-bold font-italic">
            posted on :{currentPost.postedOn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
