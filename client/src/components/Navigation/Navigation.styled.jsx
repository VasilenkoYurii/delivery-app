import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 22px;
  font-weight: 400;
  color: black;
  text-transform: uppercase;

  transition: all 0.5s ease;

  padding-top: 16px;
  padding-bottom: 16px;
  text-decoration: none;

  border-bottom: 2px solid #fff;

  &:hover {
    color: #762929;
  }

  &.active {
    color: black;
    border-bottom: 2px solid red;

    &:hover {
      color: #762929;
    }
  }
`;
