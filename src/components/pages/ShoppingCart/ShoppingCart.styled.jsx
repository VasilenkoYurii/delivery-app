import styled from '@emotion/styled';
import { FaPlus, FaMinus } from 'react-icons/fa';

export const ShoppingCartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  padding-top: 50px;
`;

export const OutletBox = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const OrderFormContainer = styled.div`
  width: 280px;
  height: 450px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const OrderForm = styled.form`
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const OrderLabel = styled.label`
  width: 260px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 16px;
  text-transform: uppercase;
`;

export const OrderInput = styled.input`
  width: 100%;
  height: 20px;

  border: none;
  border-bottom: 1px solid;
`;

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

export const ItemPrice = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
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

export const OrderPricePrg = styled.p`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const MessegeBeforeOrder = styled.h2`
  width: 600px;
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 400;
`;

export const SubmitFormButton = styled.button`
  font-size: 18px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  border-radius: 2px;
  padding: 7px;
  cursor: pointer;
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonQuantity = styled.button`
  cursor: pointer;
  border: none;
  background: #fff;
  padding: 10px;
`;

export const PlusIcon = styled(FaPlus)`
  width: 20px;
  height: 20px;
`;

export const MinusIcon = styled(FaMinus)`
  width: 20px;
  height: 20px;
`;
