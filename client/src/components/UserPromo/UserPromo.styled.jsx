import styled from '@emotion/styled';

export const PromoListItem = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserPromoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
`;

export const UserPromoListItem = styled.li`
  padding: 5px;
  width: 180px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserPromoItemImg = styled.img`
  width: 150px;
  height: 150px;
  display: block;
`;

export const PromoDescription = styled.p`
  text-align: center;
  padding: 30px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;
`;

export const UseButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  border-radius: 2px;
  padding: 7px;
  cursor: pointer;
  text-transform: uppercase;

  transition: all 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
