import React, { useState, useEffect } from "react";
import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";
import { useParams, Link } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
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
          <div className="date">{post.createdAt}</div>
          <div className="content">{`${post.content}`}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link
                className="edit-link"
                to={`/storefront-social/posts/${post._id}/edit`}
              >
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deletePost(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
