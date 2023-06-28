import {
  Nav,
  NavLinkStyled,
  NavContainer,
  CartIcon,
  PersonIcon,
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
        <NavLinkStyled to="/register">
          <PersonIcon />
        </NavLinkStyled>
        <NavLinkStyled to="/shoppingHistory">Shopping History</NavLinkStyled>
      </NavContainer>
    </Nav>
  );
};
