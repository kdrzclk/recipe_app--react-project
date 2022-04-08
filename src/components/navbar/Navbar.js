import React from "react";

import { Menu, MenuItem, Nav, Text } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <Text to="/home">
        <i> {"<KaDiR>"} </i>
        <span>RECIPE</span>
      </Text>

      <Menu>
        <MenuItem to="/about">ABOUT</MenuItem>
        <MenuItem to="/github">GITHUB</MenuItem>
        <MenuItem to="/">LOGOUT</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Navbar;
