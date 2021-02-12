import React, { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    subject: "",
    content: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { subject, value } = event.target;
    setPost({
      ...post,
      [subject]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createPost(post);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={`/posts`} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-subject"
          placeholder="Subject"
          value={props.user}
          name="subject"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-content"
          rows={10}
          placeholder="Content"
          value={post.content}
          name="content"
          required
          onChange={handleChange}
        />
      </form>
    </Layout>
  );
};
export default PostCreate;
