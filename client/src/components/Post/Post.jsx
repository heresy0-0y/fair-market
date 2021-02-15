import { Link } from "react-router-dom";
import { LikeButton, Provider } from "@lyket/react";

const Post = (props) => {
  return (
    <div className = "post-large-container">
    <div className="post-container">
      <Link to={`/storefront-social/posts/${props._id}`}>
        <div>{props.subject}</div>
        <div>{props.createdAt}</div>
          <div>{props.content}</div>
          {/* <Provider apiKey="399b32917e64940844091fa308648b">
              <ClapButton id="likeme"  namespace="post"/>
              
                </Provider> */}
      </Link>
      </div>
      </div>
  );
};

export default Post;
