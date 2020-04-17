import React from 'react';
import { colors } from '@/styles';
import LottieView from 'lottie-react-native';

import Header from '@/components/Header';
import AlertCustom from '@/components/AlertCustom';
import ItemUser from '@/components/ItemUser';



import {
  StyledContainer,
  ScrollView,
  Footer,
  FooterText,
  Check
} from './styles'

import BackgroundHeader from '@assets/images/background_fase_03.png'
import Avatar from '@assets/images/avatars/1.png'
import { Alert } from 'react-native';

const Await = ({ navigation, route: { params } }) => {

  if (!params.type) {
    Alert.alert('Erro de página', 'O tipo da página não está correta.');
    return navigation.goBack();
  }

  switch (params.type) {

    case 'ideas':
      setTimeout(() => {
        navigation.navigate('Transition', { ideas: params.ideas })
      }, 1000);
      break;

    case 'votes':
      setTimeout(() => {
        navigation.navigate('Congratulation', { ideas: params.ideas })
      }, 1000);
      break;
  }

  return (
    <StyledContainer>
      <AlertCustom
        message="Aguarde os demais integrantes do grupo"
        background="rgba(255,232,52, 0.9)"
        color={colors.dark}
      />
      <Header
        title="MOTOR DE IDEIAS"
        subtitle="Mostrar a jornada do cliente"
        image={BackgroundHeader}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 17
        }}
      >
        <ItemUser
          data={{
            avatar: Avatar,
            name: 'Vinícius',
            position: 'Cargo'
          }}
        >
          <Check>
            <LottieView
              source={require('@assets/animations/await.json')}
              style={{
                width: 80
              }}
              autoPlay
              loop
            />
          </Check>
        </ItemUser>
      </ScrollView>
      <Footer>
        <FooterText>A página será atualizada automaticamente</FooterText>
      </Footer>
    </StyledContainer>
  )
}

export default Await;