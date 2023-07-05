import { Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSlise/selectors';
import { loginUser } from 'redux/authSlise/operations';

import {
  Container,
  FormContainer,
  FormBox,
  Label,
  Input,
  FormTitle,
  Error,
  SubmitButton,
  LinkTo,
} from './LoginPage.styled';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegexp =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required')
    .matches(emailRegexp, 'Invalid email address'),
  password: Yup.string()
    .required('Required')
    .matches(passwordRegexp, 'Invalid passwors'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLogedIn === true) {
      navigate('/');
    }
  }, [isLogedIn, navigate]);

  const hendleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(loginUser(values));
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            hendleSubmit(values, { resetForm });
          }}
        >
          <FormBox>
            <Label>
              Email
              <Input name="email" type="mail" />
              <Error name="email" component="div" className="error" />
            </Label>
            <Label>
              Password
              <Input name="password" type="password" />
              <Error name="password" component="div" className="error" />
            </Label>
            <SubmitButton type="submit">Login</SubmitButton>
          </FormBox>
        </Formik>

        <p>
          Don't have an account? <LinkTo to="/register">Sign up</LinkTo>
        </p>
      </FormContainer>
    </Container>
  );
};
