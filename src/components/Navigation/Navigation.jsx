import { Nav, NavLinkStyled } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/shop">Shop</NavLinkStyled>
      <NavLinkStyled to="/shoppingCart">Shopping Cart</NavLinkStyled>
    </Nav>
  );
};
