import { Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resendVerifyEmail } from 'redux/authSlise/operations';
import { selectUser, selectIsLoggedIn } from 'redux/authSlise/selectors';

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
  RegisterMessage,
  RegisterMessagePrg,
  RegisterMessageSpan,
  SendMailButton,
} from './RegisterPage.styled';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const passRegexp =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .required('Required')
    .matches(emailRegexp, 'Invalid email address'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required')
    .matches(passRegexp, 'Password min 6 characters (Awd!03)'),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [resendButtonDisabled, setResendButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    if (timer === 0) {
      setResendButtonDisabled(false);
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [timer]);

  const hendleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  const handleResendMail = () => {
    dispatch(resendVerifyEmail({ email: user.email }));
    setResendButtonDisabled(true);
    setTimer(60);
  };

  return (
    <Container>
      <Helmet>
        <title>REGISTRATION</title>
      </Helmet>
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
        {user.email && isLoggedIn === false ? (
          <RegisterMessage>
            <RegisterMessagePrg>
              A confirmation email has been sent to{' '}
              <RegisterMessageSpan>{user.email}</RegisterMessageSpan>
            </RegisterMessagePrg>
            <RegisterMessagePrg>
              You can also look in the spam folder.
            </RegisterMessagePrg>

            <SendMailButton
              onClick={handleResendMail}
              disabled={resendButtonDisabled}
            >
              {resendButtonDisabled
                ? `Resend mail in ${timer}s`
                : 'Send mail again'}
            </SendMailButton>
          </RegisterMessage>
        ) : (
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              address: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              hendleSubmit(values, { resetForm });
            }}
          >
            <FormBox>
              <Label>
                Name
                <Input name="name" type="name" />
                <Error name="name" component="div" className="error" />
              </Label>
              <Label>
                Email
                <Input name="email" type="mail" />
                <Error name="email" component="div" className="error" />
              </Label>
              <Label>
                Phone
                <Input name="phone" type="phone" />
                <Error name="phone" component="div" className="error" />
              </Label>
              <Label>
                Address
                <Input name="address" type="address" />
                <Error name="address" component="div" className="error" />
              </Label>
              <Label>
                Password
                <Input name="password" type="password" />
                <Error name="password" component="div" className="error" />
              </Label>
              <SubmitButton type="submit">Sign up</SubmitButton>
            </FormBox>
          </Formik>
        )}

        <p>
          Already have an account? <LinkTo to="/login">Login</LinkTo>
        </p>
      </FormContainer>
    </Container>
  );
};
