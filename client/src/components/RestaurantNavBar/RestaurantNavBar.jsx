import { NavBarContainer, Link } from './RestaurantNavBar.styled';

export const RestaurantNavBar = () => {
  return (
    <NavBarContainer>
      <Link to="mcDonalds">Mc. Donalds</Link>
      <Link to="dominos">Dominos</Link>
      <Link to="sushi">Sushi</Link>
      <Link to="sweets">Sweets</Link>
    </NavBarContainer>
  );
};
