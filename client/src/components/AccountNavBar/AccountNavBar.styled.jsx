import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AccountDescriptionContainer = styled.div`
  width: 280px;
  height: 450px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 2px;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const AccountNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AccountTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid #fff;

  width: 250px;

  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

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

export const ButtonExit = styled.div`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid #fff;

  width: 200px;
  cursor: pointer;

  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #762929;
  }
`;
