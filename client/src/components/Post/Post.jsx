import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <div className = "post-large-container">
    <div className="post-container">
      <Link to={`/storefront-social/posts/${props._id}`}>
        <div>{props.subject}</div>
        <div>{props.createdAt}</div>
        <div>{props.content}</div>
      </Link>
      </div>
      </div>
  );
};

export default Post;
