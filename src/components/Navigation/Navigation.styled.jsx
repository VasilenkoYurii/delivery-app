import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 15px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: black;
  border-bottom: 2px double black;

  transition: all 0.5s ease;

  &.active {
    color: white;
    border-bottom: 2px double white;

    &:hover {
      color: #66d0d0;
      border-bottom: 2px double #66d0d0;
    }
  }

  &:hover {
    color: #66d0d0;
    border-bottom: 2px double #66d0d0;
  }

  @media screen and (min-width: 768px) {
    border-bottom: 4px double black;
    font-size: 22px;

    &.active {
      color: white;
      border-bottom: 4px double white;

      &:hover {
        color: #66d0d0;
        border-bottom: 4px double #66d0d0;
      }
    }

    &:hover {
      color: #66d0d0;
      border-bottom: 4px double #66d0d0;
    }
  }
`;
