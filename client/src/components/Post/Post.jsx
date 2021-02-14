import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post-large-container">
      <div className="post-container">
        <Link to={`/storefront-social/posts/${props._id}`}>
          <div className="post-wrap">
            <div className="post-preview">
              <p>{props.subject}</p>
              <p>{props.createdAt}</p>
              <p>{props.content}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
