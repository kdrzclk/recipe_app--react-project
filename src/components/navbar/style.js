import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background: #e1f1dd;
  height: 80px;
  width: 100%;
  font-size: 2rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled(Link)`
  padding: 1rem 0;
  color: #393e46;
  text-decoration: none;
  font-weight: 900;
  font-family: "Girassol", sans-serif;

  span {
    font-weight: 500;
    color: #00adb5;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MenuItem = styled(NavLink)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  font-size: 1.5rem;
  font-family: "Girassol", sans-serif;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #00adb5;
    font-weight: 900;
  }
`;
