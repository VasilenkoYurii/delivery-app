import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1120px;
  padding-top: 50px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
`;

export const RestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RestLink = styled(Link)`
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

export const BannerBox = styled.div`
  width: 280px;
  background-color: #313131;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const BannerImg = styled.img`
  display: block;
  height: 900px;

  border-radius: 2px;
`;

export const ProposeLink = styled(Link)`
  margin-bottom: auto;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);

  transition: transform 500ms;

  &:hover {
    transform: scale(1.01);
  }
`;

export const DiscontImg = styled.img`
  display: block;
  width: 280px;

  border-radius: 2px;
`;
