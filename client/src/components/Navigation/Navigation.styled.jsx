import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsCart4, BsFillPersonFill } from 'react-icons/bs';
import { RiHistoryLine } from 'react-icons/ri';

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

export const CartIcon = styled(BsCart4)`
  width: 60px;
`;

export const PersonIcon = styled(BsFillPersonFill)`
  width: 60px;
`;

export const HistoryIcon = styled(RiHistoryLine)`
  width: 60px;
`;
