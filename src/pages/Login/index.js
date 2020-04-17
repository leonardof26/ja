import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AuthenticationActions from '@/store/ducks/authentication'
import DropdownAlert from 'react-native-dropdownalert'
import * as Yup from 'yup'
import storage from '@/utils/storage';

import {
  Title
} from './styles'

import Form from './form'

import Container from '@/components/Container';


const SignupSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('Campo obrigatório'),
  password: Yup.string()
    .required('Campo obrigatório')
});

const onSubmit = (values, signin, nav) => {
  signin(values, nav);
}

const Login = ({ loading, error, getAuthenticationRequest, navigation }) => {
  let [dropDownAlertRef, setDropDownAlertRef] = useState(null);

  if (error) {
    dropDownAlertRef.alertWithType('error', 'Error', error.message);
  }

  return (
    <Container background="inverse">
      <DropdownAlert ref={ref => setDropDownAlertRef(ref)} />

      <Title>Bem-vindo</Title>
      <Form
        onSubmit={(values) => onSubmit(values, getAuthenticationRequest, navigation.navigate)}
        loading={loading}
        validationSchema={SignupSchema}
        initialValues={{
          identifier: '',
          password: ''
        }}
      />
    </Container>
  );
};



const mapStateToProps = ({ authentication }) => ({
  loading: authentication.loading,
  error: authentication.error
})

const mapDispatchToProps = dispatch => (bindActionCreators(AuthenticationActions, dispatch))

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);