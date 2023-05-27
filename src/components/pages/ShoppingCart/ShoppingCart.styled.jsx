import styled from '@emotion/styled';

export const ShoppingCartContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const OutletBox = styled.div`
  width: 900px;
`;

export const OrderFormContainer = styled.div`
  // width: 300px;
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

export const OrderLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const OrderInput = styled.input`
  width: 300px;
  height: 20px;
`;
