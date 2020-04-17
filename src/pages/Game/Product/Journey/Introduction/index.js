import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col,
  BlockText,
  TitleTextBlock,
  TextBlock,
} from './styles'

import Step4 from '@assets/images/fase_04.png';
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
          image={Step4}
          number="4"
          title={`o produto${'\n'}é bom?`}
          progress="100%"
        />

        <Title>A JORNADA DO CLIENTE</Title>
        {/* <Text>Produto bom é aquele que o cliente compra, usa e recomenda.</Text> */}

        <BlockText>
          <TextBlock>Produto bom é aquele que o cliente compra, usa e recomenda.</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>PRODUTOS E SERVIÇOS</TitleTextBlock>
          <TextBlock>Como você descreveria o seu produto?</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>DIGITALIZAÇÃO</TitleTextBlock>
          <TextBlock>O quão digital poderia ser o seu produto?</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>LEGAIS E INÚTEIS</TitleTextBlock>
          <TextBlock>Como não cair na armadilha de criar um produto legal, mas que ninguém vai querer comprar?</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>O PROBLEMA DO CLIENTE</TitleTextBlock>
          <TextBlock>Como criar produtos sem perder o foco em resolver o real problema dos clientes?</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>POUCO ATRITO</TitleTextBlock>
          <TextBlock>Como identificar e eliminar os atritos do cliente com o seu produto?</TextBlock>
        </BlockText>

        <BlockText>
          <TitleTextBlock>A JORNADA DO CLIENTE</TitleTextBlock>
          <TextBlock>Como identificar e eliminar os atritos do cliente com o seu produto?</TextBlock>
        </BlockText>

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
            // onPress={() => navigation.navigate('List')}
            onPress={() => navigation.navigate('Congratulation')}
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