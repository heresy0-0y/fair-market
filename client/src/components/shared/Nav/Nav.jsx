import React from "react";
import "./Nav.css";
import { NavLink , Link } from "react-router-dom";
import Menu from 'react-burger-menu/lib/menus/slide';
import Navbar from 'react-bootstrap/Navbar';

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
    <>
      
      <Menu itemListElement="div" >
        
      <div className="snackBar">
      <NavLink className="logo" to="/storefront-social">
          Storefront Social
        </NavLink>
        <div className="links">
          {user && <div className="linkwelcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
          </div>
          
      </Menu>
      
      
      
   
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
      </>
  );
};

export default Nav;
