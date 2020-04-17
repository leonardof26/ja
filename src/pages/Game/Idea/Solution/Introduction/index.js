import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col,
  BlockContainer,
  Block,
  TitleLight,
  Bold,
  ContentText
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
          <Title>ESCREVER A PROPOSTA DE VALOR</Title>
          <Text>• Após melhor definir o problema e a solução, podemos tentar condensar tudo e formular uma sentença que chamaremos aqui de Proposta de Valor. Tente reformular a sua ideia criando uma proposta de valor de maneira mais estruturada e clara: Somos a  [ nome da startup ] e estamos criando  [ qual a solução ] que vai ajudar [ quem são as pessoas impactadas ] para que consigam  [ qual o problema/dor ] através de [ algo diferente e especial da sua solução ].</Text>
          <Text>Imaginando como algumas empresas poderiam ter se apresentado:</Text>
          <Text>
            <Bold>• Somos o Spotify</Bold>
            <Text> | e provemos uma plataforma de stream de audio| para que pessoas apaixonadas por música | consigam ter acesso ao maior acervo do mundo | e no menor custo possível possam sempre curtir as suas preferidas e ainda descobrir novos artistas.</Text>
          </Text>
          <Text>
            <Bold>• Somos o Uber</Bold>
            <Text> | e provemos uma aplicativo móvel | para ajudar qualquer pessoa se deslocar de qualquer ponto a outro da cidade | de maneira conveniente e barata | utilizando serviços de outras pessoas com automóveis e dispostas a trabalhar dirigindo.</Text>
          </Text>
          <Text>
            <Bold>• Somos a StartSe</Bold>
            <Text> | e trazemos um novo ambiente de aprendizado off-line e online | para que pessoas e empresas | não se tornem obsoletas neste mundo de mudanças aceleradas | e consigam aprender sempre e  continuamente sobre as complexas tecnologias e novos negócios | de maneira fácil, rápida e muito intensa.</Text>
          </Text>
        </BlockContainer>
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