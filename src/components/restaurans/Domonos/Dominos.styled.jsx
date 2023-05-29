import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: 5px;
  width: 280px;

  border-radius: 2px;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

export const ItemImg = styled.img`
  width: 280px;
  height: 175px;
  display: block;
`;

export const ItemTitle = styled.h3`
  width: 100%;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  cursor: pointer;
  padding: 3px;

  transition: all 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
