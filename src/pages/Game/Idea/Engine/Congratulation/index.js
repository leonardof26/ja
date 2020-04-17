import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  Text,
  TitleCard
} from './styles'

import CongratulationImage from '@assets/images/modal_parabens.png';

import Container from '@/components/Container';
import FooterButton from '@/components/FooterButton';
import ContentView from '@/components/ContentView';

const Congratulation = ({ navigation, route: { params } }) => {
  const game = params.mainNavigation.getParam('game');
  const setGame = params.mainNavigation.getParam('setGame');

  return (
    <Container background="light">
      <ContentView>
        <Image source={CongratulationImage} />
        <Title>PARABÉNS, a ideia{'\n'}vencedora é "x"</Title>
        <Subtitle>Para concluir os demais desafios{'\n'}clique em avançar</Subtitle>

        <TitleCard>1° Título da ideia</TitleCard>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</Text>
      </ContentView>

      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 1;
          setGame({ forms: game.forms });
          return params.parentNavigation.navigate('Team')
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;