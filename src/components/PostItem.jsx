
import React from "react";
import {PostItem as Post} from '../UI/PostItem'
import MyButton from "../UI/button/MyButton";

const PostItem = ({number, title, body, deletePost, id}) => {
  return (
    <Post>
      <div className="post__content">
        <strong>{id}. {title}</strong>
        <div>
          {body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => deletePost(id)}>Удалить</MyButton>
      </div>
    </Post>
  );
};

export default PostItem;
