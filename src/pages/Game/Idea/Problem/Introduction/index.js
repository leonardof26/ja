import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col,
  BlockContainer,
  Block,
  TitleLight
} from './styles'

import Step3 from '@assets/images/fase_03.png';
import Background from '@assets/images/top_background_02.png'
import BackgroundFooter from '@assets/images/bottom-asset.png'

import BlockStep from '@/components/BlockStep'
import Button from '@/components/Button';
import Container from '@/components/Container';
import ContentView from '@/components/ContentView';
import { colors } from '@/styles';

const Introduction = ({ navigation, route: { params: { mainNavigation } } }) => {
  return (
    <Container background="light">
      <ContentView
        customStyle={{
          paddingBottom: 150
        }}
      >
        <BlockStep
          image={Step3}
          number="3"
          title="a idéia é boa?"
          progress="100%"
        />
        <BlockContainer>
          <Title>DESCREVER O PROBLEMA</Title>
          <Text>Se existe uma ideia inicial é hora de escrevermos realmente qual é o PROBLEMA que a sua startup está procurando resolver.</Text>
          <Text>Para ajudar a pensar:</Text>
          <Text>QUEM TEM ESTE PROBLEMA? </Text>
          <Text>QUAL O TIPO DE PESSOA E TAMANHO DO PÚBLICO?</Text>
          <Text>QUANDO ELES SENTEM O PROBLEMA?</Text>
          <Text>EM QUE SITUAÇÃO O PROBLEMA OCORRE OU SE MANIFESTA?</Text>
          <Text>COMO RESOLVEM HOJE O PROBLEMA?</Text>
          <Text>DE QUE FORMA AS PESSOAS LIDAM ATUALMENTE COM ESTA DIFICULDADE?</Text>
        </BlockContainer>

        <Block>
          <TitleLight>Atividade</TitleLight>
          <Text style={{ color: colors.white }}> 1. Escreva de maneira sucinta o problema como se você alguém de fora estivesse tentando entender este problema.</Text>
        </Block>
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
              backgroundColor: '#fff',
              justifyContent: 'center',
              paddingHorizontal: 0,
              width: 130,
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
            onPress={() => navigation.navigate('Form')}
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