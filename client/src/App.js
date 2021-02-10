import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import Storefront from "./screens/Storefront/Storefront";
import StorefrontSocial from "./screens/StorefrontSocial/StorefrontSocial";
import SignUpIn from "./screens/SignUpIn";
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

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Storefront user={user} />
        </Route>
        <Route path="/signup">
          <SignUpIn setUser={setUser} />
        </Route>
        <Route path="/signout">
          <SignUpIn setUser={setUser} clearUser={clearUser} />
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
