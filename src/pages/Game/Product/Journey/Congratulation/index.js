import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  Text,
  TitleCard,
  BlockText,
  TitleTextBlock,
  TextBlock,
  BlockContainer,
  Bold,
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
      <ContentView
        customStyle={{
          paddingBottom: 150
        }}
      >
        <Image source={CongratulationImage} />
        <Title>PARABÉNS, A JORNADA{'\n'}DO CLIENTE FOI DEFINIDA</Title>
        <Subtitle>Para concluir os demais desafios{'\n'}clique em próximo desafio</Subtitle>

        <BlockText>
          <TitleTextBlock>1° - jornada</TitleTextBlock>
          <TextBlock>
            <Bold>Quando e como utilizam seu produto</Bold></TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Momentos que descrevem a utilização</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Atores envolvidos na solução</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Diferencial da sua solução</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>2° - jornada</TitleTextBlock>
          <TextBlock>
            <Bold>Quando e como utilizam seu produto</Bold></TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Momentos que descrevem a utilização</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Atores envolvidos na solução</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

        <BlockText>
          <TextBlock>
            <Bold>Diferencial da sua solução</Bold>
          </TextBlock>
          <TextBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua.</TextBlock>
        </BlockText>

      </ContentView>

      <FooterButton
        onPress={() => navigation.navigate('Introduction')}
        // onPress={() => {
        //   game.forms.idea.verify = 1;
        //   setGame({ forms: game.forms });
        //   return params.parentNavigation.navigate('Introduction')
        // }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;