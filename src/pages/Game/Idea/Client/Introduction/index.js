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
          <Title>DESENHAR O CLIENTE IMAGINÁRIO</Title>
          <Text>Esta é uma atividade que combina com a Pesquisa Primária.</Text>
          <Text>• Se os clientes são pessoas, vamos desenhar um cliente imaginário (também conhecido como persona).</Text>
          <Text>• Mesmo que a sua startup esteja propondo uma solução para uma empresa (B2B), e não um consumidor final (B2C), pense que na empresa cliente existem pessoas que avaliam a sua solução.</Text>
          <Text>• Vamos criar este cliente imaginário imaginando como ele se parece, criando um um nome, imaginando a sua idade... e anotando algumas características que ajudariam a descrevê-lo. A intenção não é ser preciso mas humanizar a sua relação com o cliente.</Text>
        </BlockContainer>
        <Block>
          <TitleLight>Atividade</TitleLight>
          <Text style={{ color: colors.white }}>• Adicione uma imagem que poderia ser uma imagem do cliente (cuide para não utilizar a imagem real de alguém que não aprova o uso).</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• Dê um nome para o cliente imaginário e adicione características gerais (idade, gênero, localidade, etc.).</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• Agora visite, conheça, observe ou entreviste alguém, busque onde este cliente imaginário está. Interaja de alguma forma e tenha empatia. Ao viver o problema ou apresentar a sua proposta de solução, o que você observa neste cliente?</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• O que ele FALA e o ele FAZ?</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• O que ele VÊ e o que ele OUVE?</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• O que ele SENTE e o que ele PENSA?</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• Quais são as reais DORES (pontos negativos) e VALORES (pontos positivos) para ele?</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>• Adicione nas notas imagens e dados do local real que você visitou e das pessoas que você conversou ou entrevistou.</Text>
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