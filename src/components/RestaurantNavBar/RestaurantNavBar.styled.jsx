import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBarContainer = styled.div`
  padding-top: 20px;
  width: 300px;
  height: 100vh;

  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 27px;
  font-weight: 300;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);

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
