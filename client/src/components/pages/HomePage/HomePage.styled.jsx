import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 300px;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
  transition: transform 500ms;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgDominos = styled.img`
  display: block;
  width: 230px;
  height: 200px;
`;

export const Img = styled.img`
  display: block;
  width: 300px;
  height: 200px;
`;

export const LinkPrg = styled.p`
  color: black;
  font-size: 20px;
`;
