import { Nav, NavLinkStyled, NavContainer } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/shop">Shop</NavLinkStyled>
      </NavContainer>
      <NavContainer>
        <NavLinkStyled to="/shoppingCart">Shopping Cart</NavLinkStyled>
        <NavLinkStyled to="/shoppingHistory">Shopping History</NavLinkStyled>
      </NavContainer>
    </Nav>
  );
};
