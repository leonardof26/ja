import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col
} from './styles'

import Step3 from '@assets/images/fase_03.png';
import Background from '@assets/images/top_background_02.png'
import BackgroundFooter from '@assets/images/bottom-asset.png'

import BlockStep from '@/components/BlockStep'
import Button from '@/components/Button';
import Container from '@/components/Container';
import ContentView from '@/components/ContentView';

const Introduction = ({ navigation, route: { params: { mainNavigation } } }) => {
  return (
    <Container background="light">
      <ContentView>
        <BlockStep
          image={Step3}
          number="3"
          title="a idéia é boa?"
          progress="100%"
        />

        <Title>Motor de ideias</Title>
        <Text>Para iniciar precisamos de muitas ideias e muitas ideias diferentes. Então vamos tentar gerar uma quantidade de ideias, votar nas que parecem ser as mais interessantes.</Text>
      </ContentView>
      <Footer
        source={BackgroundFooter}
        resizeMode="contain"
        imageStyle={{
          top: '80%',
          bottom: -13
        }}
      >
        <Col>
          <Button
            text="Cancelar"
            onPress={() => mainNavigation.goBack()}
            customStyles={{
              backgroundColor: 'transparent',
              paddingHorizontal: 0,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            customStylesText={{
              color: '#A5A5A5'
            }}
          />
        </Col>
        <Col>
          <Button
            text="Iniciar"
            onPress={() => navigation.navigate('List')}
            customStyles={{
              paddingHorizontal: 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: 130
            }}
          />
        </Col>
      </Footer>
    </Container>
  )
}

export default Introduction;