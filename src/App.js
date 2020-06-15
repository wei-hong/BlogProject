import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import Post from "./components/post/Posts";
import NavBar from "./components/NavBar";
import AboutMe from "./components/about";

import BlogForm from "./components/blogForm";
import AddPost from "./components/post/addPost";

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post" component={Post} />
        <Route path="/AddPost" component={AddPost} />
        <Route path="/post/:slug" component={BlogForm} />
        <Route path="/about-me" component={AboutMe} />
      </Switch>
    </Router>
  );
}

export default App;
