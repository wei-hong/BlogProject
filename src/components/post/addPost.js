import React, { useState } from "react";

import { getFirebase } from "../../firebase/firebase";
const labelStyle = {
  boxSizing: "border-box",
  display: "block",
  marginBottom: 4,
};
const inputStyles = {
  display: "flex",
  width: "70%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem",
};
const AddPost = ({ history }) => {
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [blogImage, setblogImage] = useState("");
  const [blogText, setblogText] = useState("");
  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`; // prepend with a 0
    }

    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`; // prepend with a 0
    }

    return {
      formatted: `${year}-${month}-${day}`, // used for sorting
      pretty: now.toLocaleDateString("en-US", options), // used for displaying
    };
  };

  const createPost = () => {
    const date = generateDate();
    console.log({
      blogCategory,
      blogTitle,
      slug,
      author,
      blogImage,
      blogText,
    });

    const newPost = {
      blogCategory,
      blogTitle,
      dateFormatted: date.formatted,
      slug,
      postedOn: date.pretty,
      author,
      blogImage,
      blogText,
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .set(newPost)
      .then(() => history.push(`/`));
  };

  return (
    <>
      <h1>Create a new post</h1>
      <section className="container mx-auto" style={{ margin: "2rem 0" }}>
        <label style={labelStyle} htmlFor="catagory-filed">
          Catagory
        </label>
        <input
          style={inputStyles}
          id="catagory-filed"
          type="text"
          value={blogCategory}
          onChange={({ target: { value } }) => {
            setBlogCategory(value);
          }}
        />

        <label style={labelStyle} htmlFor="title-filed">
          Title
        </label>
        <input
          style={inputStyles}
          id="title-filed"
          type="text"
          value={blogTitle}
          onChange={({ target: { value } }) => {
            setBlogTitle(value);
          }}
        />
        <label style={labelStyle} htmlFor="Slug-filed">
          Slug
        </label>
        <input
          style={inputStyles}
          id="Slug-filed"
          type="text"
          value={slug}
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label style={labelStyle} htmlFor="author-filed">
          author
        </label>
        <input
          style={inputStyles}
          id="author-filed"
          type="text"
          value={author}
          onChange={({ target: { value } }) => {
            setAuthor(value);
          }}
        />
        <label style={labelStyle} htmlFor="image-filed">
          Image(URL)
        </label>
        <input
          style={inputStyles}
          id="image-filed"
          type="text"
          value={blogImage}
          onChange={({ target: { value } }) => {
            setblogImage(value);
          }}
        />
        <label style={labelStyle} htmlFor="content-field">
          Content
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={blogText}
          onChange={({ target: { value } }) => {
            setblogText(value);
          }}
        />

        <button
          style={{
            border: "none",
            color: "#fff",
            backgroundColor: "#039be5",
            borderRadius: "4px",
            padding: "8px 12px",
            fontSize: "0.9rem",
          }}
          onClick={createPost}
        >
          Create
        </button>
      </section>
    </>
  );
};

export default AddPost;
