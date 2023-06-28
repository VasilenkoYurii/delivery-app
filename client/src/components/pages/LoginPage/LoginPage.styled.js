import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1120px;
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const FormContainer = styled.div`
  width: 400px;
  height: 100%;

  padding: 10px;
  padding-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 2px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.5);
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const Label = styled.label`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 16px;
  text-transform: uppercase;

  position: relative;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 20px;

  border: none;
  border-bottom: 1px solid;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;

  top: 3px;
  left: 90px;

  font-size: 12px;
  text-transform: none;

  color: red;
`;

export const SubmitButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  outline: none;
  border: 1px solid;
  cursor: pointer;
  padding: 3px;
  text-transform: uppercase;

  margin-bottom: 10px;

  transition: all 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const LinkTo = styled(Link)`
  text-transform: uppercase;
  color: black;
  transition: all 500ms;

  &:hover {
    color: #762929;
  }
`;
