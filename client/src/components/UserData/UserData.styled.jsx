import styled from '@emotion/styled';

export const DataListItem = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  width: 100%;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemPrg = styled.p`
  display: flex;
  padding-bottom: 3px;
  margin-bottom: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemSpan = styled.span`
  display: block;
  width: 130px;

  font-size: 20px;
  text-transform: uppercase;
  font-weight: 300;
`;
