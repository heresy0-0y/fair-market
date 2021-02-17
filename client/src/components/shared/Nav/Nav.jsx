import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Menu from "react-burger-menu/lib/menus/slide";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/storefront-social/add-post">
      Add Post
    </NavLink>
    <NavLink className="menu-item" to="/signout">
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
    <>
      <div className="snackBar">
        <Menu itemListElement="div">
          <NavLink id="logo" className="menu-item" to="/storefront-social">
            Storefront Social
          </NavLink>
          <div className="menu-item">
            {user && (
              <div id="linkwelcome" className="menu-item">
                Welcome, {user.username}
              </div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </Menu>
      </div>
      <nav>
        <div className="nav">
          <NavLink className="logo" to="/storefront-social">
            Storefront Social
          </NavLink>
          <div className="links">
            {user && (
              <div className="linkwelcome">Welcome, {user.username}</div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
