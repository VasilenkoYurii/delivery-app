import styled from '@emotion/styled';

export const ShoppingHistoryContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  padding-top: 50px;
`;

export const ResponsContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const HistoryFormTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
`;

export const HistoryFormDescription = styled.p`
  text-align: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;
`;

export const HisrotyFormContainer = styled.div`
  width: 280px;
  height: 450px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const HisrotyForm = styled.form`
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const HisrotyLabel = styled.label`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 16px;
  text-transform: uppercase;
`;

export const HisrotyInput = styled.input`
  width: 100%;
  height: 20px;

  border: none;
  border-bottom: 1px solid;
`;

export const SearchButton = styled.button`
  font-size: 18px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  border-radius: 2px;
  padding: 7px;
  cursor: pointer;

  transition: all 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const OrdersList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const OrdersListItem = styled.li`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);

  width: 100%;
  padding: 10px;

  display: flex;
`;

export const ItemPrg = styled.p`
  display: flex;
  width: 400px;
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

export const UserDescriptionContainer = styled.div`
  margin-right: 10px;
`;

export const UserOrderContainer = styled.div`
  width: 100%;
`;

export const UserOrderList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;

  gap: 10px;
  justify-content: center;
`;

export const UserOrderListItem = styled.li`
  padding: 5px;
  width: 180px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserOrderItemImg = styled.img`
  width: 180px;
  height: 100px;
  display: block;
`;

export const UserOrderDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 5px;
`;

export const UserOrderDescriptionSpan = styled.span`
  text-transform: uppercase;
  font-weight: 100;
`;
