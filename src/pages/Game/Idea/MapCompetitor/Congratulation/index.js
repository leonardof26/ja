import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  Row,
  Col,
  Block,
  Figure,
  TitleCard,
  Text,

  BlockCompetitor,
  TitleCompetitor,
  DescriptionCompetitor,
  RowCompetitor,
  LabelLevel,
  BlockLevel,
  BlockLevelText
} from './styles'

import CongratulationImage from '@assets/images/modal_parabens.png';
import Market from '@assets/images/market.jpg'

import Container from '@/components/Container';
import FooterButton from '@/components/FooterButton';
import ContentView from '@/components/ContentView';

const Congratulation = ({ navigation, route: { params } }) => {
  const game = params.mainNavigation.getParam('game');
  const setGame = params.mainNavigation.getParam('setGame');

  return (
    <Container
      background="light"
      customStyle={{
        justifyContent: 'flex-start'
      }}
    >
      <ContentView customStyle={{
        paddingBottom: 150
      }}>
        <Image source={CongratulationImage} />
        <Title>PARABÉNS, o{'\n'}concorrente foi{'\n'}mapeado</Title>
        <Subtitle>Para concluir os demais desafios clique{'\n'}em próximo desafio</Subtitle>


        <BlockCompetitor>
          <TitleCompetitor>NOME DE OUTRO CONCORRENTE</TitleCompetitor>
          <DescriptionCompetitor>Lorem Ipsum is simply dummy text of the printing and typesetting.</DescriptionCompetitor>
          <RowCompetitor>
            <LabelLevel>Característica X</LabelLevel>
            <BlockLevel>
              <BlockLevelText>Baixo</BlockLevelText>
            </BlockLevel>
          </RowCompetitor>
          <RowCompetitor>
            <LabelLevel>Característica Y</LabelLevel>
            <BlockLevel>
              <BlockLevelText>ALTO</BlockLevelText>
            </BlockLevel>
          </RowCompetitor>
          <RowCompetitor>
            <LabelLevel>Característica Z</LabelLevel>
            <BlockLevel>
              <BlockLevelText>MÉDIO</BlockLevelText>
            </BlockLevel>
          </RowCompetitor>
        </BlockCompetitor>

      </ContentView>
      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 7;
          setGame({ forms: game.forms });
          return params.mainNavigation.navigate('Home');
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;