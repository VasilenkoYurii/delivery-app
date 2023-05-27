import { NavBarContainer } from './RestaurantNavBar.styled';
import { NavLink } from 'react-router-dom';

export const RestaurantNavBar = () => {
  return (
    <NavBarContainer>
      <NavLink to="mcDonalds">Mc. Donalds</NavLink>
      <NavLink to="dominos">Dominos</NavLink>
      <NavLink to="sushi">Sushi</NavLink>
      <NavLink to="sweets">Sweets</NavLink>
    </NavBarContainer>
  );
};
