import React from 'react';
import {
  Image,
  Title,
  Subtitle,
  Row,
  Col,
  ContainerUser,
  Figure,
  TitleCard,
  Text
} from './styles'

import CongratulationImage from '@assets/images/modal_parabens.png';
import Avatar from '@assets/images/avatars/1.png'

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
        <Title>PARABÉNS, o cliente{'\n'}imaginário foi criado</Title>
        <Subtitle>Para concluir os demais desafios{'\n'}clique em avançar</Subtitle>

        <Row style={{
          marginTop: 50,
          marginBottom: 12
        }}>
          <Col>
            <Figure source={Avatar} />
          </Col>
          <Col>
            <TitleCard>Maria das Flores, 20 anos</TitleCard>
            <Row>
              <Text style={{ marginRight: 30 }}>São Paulo - SP</Text>
              <Text>Mulher</Text>
            </Row>
          </Col>
        </Row>

        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.</Text>

        <Row style={{
          flexWrap: 'wrap',
          paddingVertical: 20,
          alignItems: 'flex-start'
        }}>
          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Fala</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.</Text>
          </Col>
          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Faz</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</Text>
          </Col>

          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Vê</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up</Text>
          </Col>

          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Ouve</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up </Text>
          </Col>

          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Sente</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.</Text>
          </Col>

          <Col style={{ width: '50%', paddingVertical: 10 }}>
            <TitleCard>Pensa</TitleCard>
            <Text style={{ fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.</Text>
          </Col>
        </Row>
      </ContentView>
      <FooterButton
        onPress={() => {
          game.forms.idea.verify = 5;
          setGame({ forms: game.forms });

          params.parentNavigation.navigate('MapMarket');
        }}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Congratulation;