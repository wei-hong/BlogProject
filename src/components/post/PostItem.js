import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, handleDelete }) => {
  return (
    <div
      className="container d-flex"
      style={{ marginTop: "20px", width: "60vw" }}
    >
      <div className="card">
        <img
          className="card-img-top rounded mx-auto d-block "
          style={{ width: "30rem", height: "18rem" }}
          src={post.blogImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{post.blogTitle}</h5>
          <p
            className="card-text text-justify"
            dangerouslySetInnerHTML={{
              __html: `${post.blogText.substring(0, 200)}...`,
            }}
          ></p>
          <Link to={`/post/${post.slug}`}>Continue reading...</Link>
          <p className="text-right font-weight-bold font-italic">
            posted on :{post.postedOn}
          </p>
        </div>
        <button
          style={{ width: "30%" }}
          onClick={() => handleDelete(post.slug)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostItem;
