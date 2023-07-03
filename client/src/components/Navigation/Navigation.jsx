import {
  Nav,
  NavLinkStyled,
  NavContainer,
  CartIcon,
  PersonIcon,
  HistoryIcon,
} from './Navigation.styled';

export const Navigation = () => {
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
        <NavLinkStyled to="/register">
          <PersonIcon />
        </NavLinkStyled>
      </NavContainer>
    </Nav>
  );
};
