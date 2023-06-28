import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 260px;
  height: 20px;

  /* font-size: 16px;
  font-weight: 700; */

  border: none;
  border-bottom: 1px solid;
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: -16px;
  transform: translateY(39px);
  background: #fff;
  border: 1px solid rgb(34, 34, 34);
  width: 262px;
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left;
`;

export const ListItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
`;
