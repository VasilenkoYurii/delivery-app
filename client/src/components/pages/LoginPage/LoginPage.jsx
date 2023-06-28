import { Formik } from 'formik';
import * as Yup from 'yup';

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

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Required')
    .matches(emailRegexp, 'Invalid email address'),
  password: Yup.string().required('Required'),
});

export const LoginPage = () => {
  return (
    <Container>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <Formik
          initialValues={{
            email: '',
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
