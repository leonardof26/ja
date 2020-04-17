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
          <Title>MAPEAR O MERCADO</Title>
          <Text>Esta é uma atividade que combina com a Pesquisa Secundária.</Text>
          <Text>• É preciso pesquisar o tamanho total do mercado potencial, o mercado que é possível alcançar e qual será o pequeno mercado (nicho) que será atacado primeiro.</Text>
        </BlockContainer>
        <Block>
          <TitleLight>Atividade</TitleLight>
          <Text style={{ color: colors.white }}>• Pesquise e tente mostrar dados e fatos que descrevam em números o tamanho do mercado em três dimensões:</Text>
          <Text style={{ color: colors.white }}>• Mercado Potencial Total (MPT): estas são as quantidades totais de clientes, vendas ou receitas que teoricamente poderia ser conquistadas pela sua startup.</Text>
          <Text style={{ color: colors.white }}>• Mercado Razoavelmente Alcançável (MRA): estas são as quantidades razoáveis, ou seja, as quantidades relativas que a sua startup pretende competir e alcançar.</Text>
          <Text style={{ color: colors.white }}>• Mercado Inicial Restrito (MIR): estas são as quantidades restritas que demonstram o pequeno mercado inicial -o nicho -no qual você irá experimentar as primeiras conquistas.</Text>
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