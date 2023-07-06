import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authSlise/operations';

import {
  AccountDescriptionContainer,
  AccountTitle,
  StyledLink,
  AccountNavContainer,
  ButtonExit,
} from './AccountNavBar.styled';

export const AccountNavBar = () => {
  const dispatch = useDispatch();

  const hendleExit = () => {
    dispatch(logOut());
  };

  return (
    <AccountDescriptionContainer>
      <AccountNavContainer>
        <AccountTitle>Account</AccountTitle>

        <StyledLink to="userData">My information</StyledLink>
        <StyledLink to="userPromo">My promo %</StyledLink>
      </AccountNavContainer>

      <ButtonExit onClick={hendleExit}>Exit</ButtonExit>
    </AccountDescriptionContainer>
  );
};
