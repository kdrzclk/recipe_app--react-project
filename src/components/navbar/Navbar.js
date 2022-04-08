import React, { useState } from "react";

import { Menu, MenuItem, Nav, Text, Hamburger } from "./style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Text to="/home">
        <i> {"<KaDiR>"} </i>
        <span>RECIPE</span>
      </Text>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuItem onClick={() => setIsOpen(!isOpen)} to="/about">
          ABOUT
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(!isOpen)} to="/github">
          GITHUB
        </MenuItem>
        <MenuItem onClick={() => setIsOpen(!isOpen)} to="/">
          LOGOUT
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
