import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, deletePost }) => {
  if (!posts.length) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          id={post.id}
          title={post.title}
          body={post.body}
          key={post.id}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default PostList;
