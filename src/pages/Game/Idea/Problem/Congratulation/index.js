import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  ContainerUser,
  TitleCard,
  Text
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
        paddingHorizontal: 32,
        justifyContent: 'flex-start'
      }}
    >
      <Image source={CongratulationImage} />
      <Title>O problema{'\n'}foi descrito</Title>
      <Subtitle>Para concluir os demais desafios{'\n'}clique em avançar</Subtitle>


      <ContainerUser>
        <TitleCard>Descrição do problema</TitleCard>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum orci vitae tellus pellentesque.</Text>
      </ContainerUser>

      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 3;
          setGame({ forms: game.forms });

          params.parentNavigation.navigate('Solution');
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;