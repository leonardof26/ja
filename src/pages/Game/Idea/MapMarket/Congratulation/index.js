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
  Text
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
        <Title>PARABÉNS, o mercado{'\n'}foi mapeado</Title>
        <Subtitle>Para concluir os demais desafios{'\n'}clique em avançar</Subtitle>

        <Row style={{
          marginTop: 50,
          marginBottom: 12
        }}>
          <Col style={{ width: '30%', alignItems: 'center' }}>
            <Figure source={Market} />
          </Col>
          <Col style={{ width: '70%' }}>
            <TitleCard>Mercado Total</TitleCard>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</Text>
          </Col>
        </Row>

        <Block>
          <TitleCard>Mercado Razoavelmente</TitleCard>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</Text>
        </Block>

        <Block>
          <TitleCard>Mercado Inicial</TitleCard>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</Text>
        </Block>

      </ContentView>
      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 6;
          setGame({ forms: game.forms });

          params.parentNavigation.navigate('MapCompetitor');
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;