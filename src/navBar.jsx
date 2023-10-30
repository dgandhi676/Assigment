import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: black;
  color: white;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 50px;
`;

const SearchBar = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

const NavLink = styled.a`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo src="./assets/logo.png" alt="logo" />
      <SearchBar type="text" placeholder="Search..." />
      <div>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
