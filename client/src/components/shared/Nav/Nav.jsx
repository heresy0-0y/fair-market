import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/storefront-social/add-post">
      Add Post
    </NavLink>
    <NavLink className="link" to="/signout">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signup">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/signin">
      Sign In
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/storefront-social">
      Posts
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/storefront-social">
          Storefront Social
        </NavLink>
        <div className="links">
          {user && <div className="linkwelcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
