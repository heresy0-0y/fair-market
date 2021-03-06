import { useEffect, useState } from "react";
import { getPosts } from "../../services/posts";
import {
  lonelyPostsFirst,
  mostOld,
  mostRecent,
  sociallyEngaged,
} from "../../utils/sort/sort";
import Layout from "../../components/shared/Layout/Layout";
import Post from "../../components/Post/Post";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import "./StorefrontSocial.css";

const StorefrontSocial = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);
  const [sortType, setSortType] = useState("most-recent");

  useEffect(() => {
    const fetchPosts = async () => {
      const Posts = await getPosts();
      setAllPosts(Posts);
      setQueriedPosts(mostRecent(Posts));
    };
    fetchPosts();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "most-recent":
        setQueriedPosts(mostRecent(queriedPosts));
        break;
      case "from-longest-ago":
        setQueriedPosts(mostOld(queriedPosts));
        break;
      case "lonely-posts-first":
        setQueriedPosts(lonelyPostsFirst(queriedPosts));
        break;
      case "socially-engaged":
        setQueriedPosts(sociallyEngaged(queriedPosts));
        break;
      default:
        setQueriedPosts(mostRecent(queriedPosts));
        break;
    }
  };

  const handleSearch = (event) => {
    const newQueriedPosts = allPosts.filter((post) =>
      post.subject.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPosts, () => handleSort(sortType));
  };

  const handleSubmit = (event) => event.preventDefault();

  const postsJSX = queriedPosts.map((post, index) => (
    <div className="single-post">
      <Post
        className="post-of-posts"
        _id={post._id}
        subject={post.subject}
        content={post.content}
        key={index}
      />
    </div>
  ));

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="sort">
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
      </div>
      <div className="all-the-posts-container">
        <div className="storefront-social-posts">{postsJSX}</div>
      </div>
    </Layout>
  );
};

export default StorefrontSocial;
