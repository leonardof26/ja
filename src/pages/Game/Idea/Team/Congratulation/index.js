import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  ContainerUser
} from './styles'

import CongratulationImage from '@assets/images/modal_parabens.png';
import Avatar from '@assets/images/avatars/1.png'

import Container from '@/components/Container';
import FooterButton from '@/components/FooterButton';
import ContentView from '@/components/ContentView';
import ItemUser from '@/components/ItemUser';

const Congratulation = ({ navigation, route: { params } }) => {
  const game = params.mainNavigation.getParam('game');
  const setGame = params.mainNavigation.getParam('setGame');

  return (
    <Container
      background="light"
      customStyle={{
        paddingHorizontal: 24,
        justifyContent: 'flex-start'
      }}
    >
      <Image source={CongratulationImage} />
      <Title>PARABÉNS, a EQUIPE{'\n'}FOI ORGANIZADA</Title>
      <Subtitle>Para concluir os demais desafios clique{'\n'}em Avançar</Subtitle>


      <ContainerUser>
        <ItemUser
          data={{
            name: 'Vinícius',
            position: 'CEO',
            avatar: Avatar
          }}
        />
      </ContainerUser>

      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 2;
          setGame({ forms: game.forms });
          return params.parentNavigation.navigate('Problem')
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;