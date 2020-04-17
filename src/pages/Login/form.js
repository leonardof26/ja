import React from 'react';
import { reduxForm, Field } from 'redux-form'
import FormGroup from '../../components/FormGroup'
import { Dimensions } from 'react-native'
import { Formik } from 'formik'

import {
    FormContainer,
    Link,
    Footer,
    ButtonContainer
    // Button,
    // ButtonText
} from './styles';
import Button from '@/components/Button';
import { colors } from '@/styles';


const Form = ({
    onSubmit,
    initialValues,
    loading = false,
    validationSchema,
    ...props
}) => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid, errors, ...state }) => {
                return (
                    <FormContainer>
                        <FormGroup
                            onChangeText={handleChange('identifier')}
                            onBlur={handleBlur('identifier')}
                            error={errors['identifier']}
                            value={values.identifier}
                            required={true}
                            autoCapitalize='none'
                            returnKeyType='next'
                            label="Usuário ou e-mail"
                            keyboardType='email-address'
                        />
                        <FormGroup
                            label="Senha"
                            returnKeyType='done'
                            secureTextEntry={true}
                            required={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            error={errors['password']}
                            value={values.password}
                        />
                        <Link>Esqueci minha senha</Link>
                        {/* <Button onPress={handleSubmit}>
                            <ButtonText>Entrar</ButtonText>
                        </Button> */}
                        <ButtonContainer>
                            <Button
                                disabled={!isValid}
                                onPress={handleSubmit}
                                text="Entrar"
                                loading={loading}
                                customStyles={{
                                    backgroundColor: !isValid ? '#ccc' : colors.primary
                                }}
                            />
                        </ButtonContainer>
                    </FormContainer>

                )
            }}
            {/* {onError && <Alert style={{ marginBottom: 30, textAlign: 'center' }} severity="error">{onError}</Alert>} */}

        </Formik>
    )
}

export default Form
