import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavLinkStyled,
  NavContainer,
  CartIcon,
  PersonIcon,
  HistoryIcon,
} from './Navigation.styled';

export const Navigation = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isAccountPage = location.pathname === '/account';
  const isUserData = location.pathname === '/account/userData';
  const isUserPromo = location.pathname === '/account/userPromo';

  return (
    <Nav>
      <NavContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/shop">Shop</NavLinkStyled>
      </NavContainer>
      <NavContainer>
        <NavLinkStyled to="/shoppingCart">
          <CartIcon />
        </NavLinkStyled>
        <NavLinkStyled to="/shoppingHistory">
          <HistoryIcon />
        </NavLinkStyled>
        <NavLinkStyled
          to="/register"
          className={
            isLoginPage || isAccountPage || isUserData || isUserPromo
              ? 'active'
              : ''
          }
        >
          <PersonIcon />
        </NavLinkStyled>
      </NavContainer>
    </Nav>
  );
};
