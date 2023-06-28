import { Formik } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet';

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
  return (
    <Container>
      <Helmet>
        <title>REGISTRATION</title>
      </Helmet>
      <FormContainer>
        <FormTitle>Sign Up</FormTitle>
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
            console.log(values);
            alert(JSON.stringify(values, null, 2));
            resetForm();
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
        <p>
          Already have an account? <LinkTo to="/login">Login</LinkTo>
        </p>
      </FormContainer>
    </Container>
  );
};
