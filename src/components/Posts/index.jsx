import React, { useState, useEffect } from "react";
import { Post } from "../Post";

import "../../styles/index.sass";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error(error.name, error.message);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const commentsData = await response.json();
        setComments(commentsData);
      } catch (error) {
        console.error(error.name, error.message);
      }
    };

    fetchPosts();
    fetchComments();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          comments={comments}
        />
      ))}
    </div>
  );
};
