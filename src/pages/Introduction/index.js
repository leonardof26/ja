import React, { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserActions from '@/store/ducks/user'
import * as Animatable from 'react-native-animatable';

import {
  Image,
  Title,
  Text,
  Body,
  Footer
} from './styles';

import Container from '@/components/Container'

import Rocket from '@assets/images/modal_parabens.png'
import Button from '@/components/Button';
import { colors } from '@/styles';



const Content = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <Animatable.View animation="fadeInUp">
          <Title>BEM-VINDO AO MUNDO{'\n'}DO EMPREENDEDORISMO</Title>
          <Text>Faça sua ideia decolar e se{'\n'}transformar em unicórnio!</Text>
        </Animatable.View>
      )
    case 2:
      return (
        <Animatable.View animation="fadeInUp">
          <Title>Olá,</Title>
          <Text style={{ textAlign: 'left' }}>
            Este jogo é um espaço para você e seus{'\n'}colegas criarem e desenvolverem juntos{'\n'}uma nova StartUP... Lorem ipsum dolor{'\n'}sit amet, consectetur adipisicing elit.{'\n'}{'\n'}
            Lorem ipsum dolor sit amet, consectetur{'\n'}adipisicing elit, sed do eiusmod tempor{'\n'}incididunt ut labore et dolore magna wirl aliqua.
          </Text>
        </Animatable.View>
      )
  }
}


function onSubmit(step, setStep, updateUser, user, navigate) {

  if (step === 2) {
    return updateUser(
      user._id,
      {
        first_access: false
      },
      {
        navigate,
        page: 'Home'
      }
    )
  }

  setStep(step + 1);
}

const Introduction = ({ navigation, user, updateUserRequest, loading, error }) => {
  let [step, setStep] = useState(1);

  return (
    <Container background="inverse">

      <Body>
        <Animatable.View animation="fadeInUp">
          <Image source={Rocket} width={200} height={200} />
        </Animatable.View>
        <Content step={step} />
      </Body>
      <Footer>
        <Button
          loading={loading}
          text={step === 1 ? 'Começar' : 'Iniciar'}
          onPress={() => onSubmit(step, setStep, updateUserRequest, user, navigation.navigate)}
        />
      </Footer>
    </Container>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user.data,
  error: user.error
})

const mapDispatchToProps = dispatch => (bindActionCreators(UserActions, dispatch))

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Introduction);
