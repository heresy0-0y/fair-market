import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import Storefront from "./screens/Storefront/Storefront";
import StorefrontSocial from "./screens/StorefrontSocial/StorefrontSocial";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import PostCreate from "./screens/PostCreate/PostCreate";
import PostEdit from "./screens/PostEdit/PostEdit";
import PostDetail from "./screens/PostDetail/PostDetail";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <StorefrontSocial user={user} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/signin">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/signout">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route>
        <Route exact path="/storefront-social">
          <StorefrontSocial user={user} />
        </Route>
        <Route path="/storefront-social/add-post">
          {user ? <PostCreate user={user} /> : <Redirect to="/signup" />}
        </Route>
        <Route exact path="/storefront-social/posts/:id/edit">
          {user ? <PostEdit user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/storefront-social/posts/:id">
          <PostDetail user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
