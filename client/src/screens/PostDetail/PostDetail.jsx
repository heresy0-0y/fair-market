import React, { useState, useEffect } from "react";
import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, useHistory, Link } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [datePosted, setDatePosted] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
      const postedDate = new Date(post.createdAt);
      const dateString =
        postedDate.toLocaleDateString() + " " + postedDate.toLocaleTimeString();
      setDatePosted(dateString);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="post-detail">
        <div className="detail">
          <div className="subject">{post.subject}</div>
          <span>{post.userId}</span>
          <div className="date">{datePosted}</div>
          <div className="content">{`${post.content}`}</div>
        </div>
        <div className="button-container">
          <button
            className="edit-button"
            onClick={() =>
              history.push(`/storefront-social/posts/${post._id}/edit`)
            }
          >
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() =>
              deletePost(post._id).then(() =>
                history.push("/storefront-social")
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
