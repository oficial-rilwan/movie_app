import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { BookmarkOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  return (
    <Container fluid="sm">
      <nav className="nav">
        <Link to="/" className="logo">
          Logo
        </Link>
        <ul className="nav-items">
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/series">TV Series</Link>
          </li>
        </ul>
        <ul className="nav-items">
          <li>
            <Link to="/watchlist">
              <BookmarkOutlined />
            </Link>
          </li>
          <li>
            <Link to="/login">
              <PersonOutlineOutlined />
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
