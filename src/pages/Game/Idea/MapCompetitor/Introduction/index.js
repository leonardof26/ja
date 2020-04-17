import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col,
  BlockContainer,
  Block,
  TitleLight,
  Title2,
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
          <Title>MAPEAR OS CONCORRENTES</Title>
          <Text>Esta é uma atividade que combina com a Pesquisa Primária.</Text>
        </BlockContainer>

        <BlockContainer>
          <Title2>Todas as empresas tem{'\n'}concorrentes.</Title2>
          <Text>Mesmo que você imagine que a sua solução é tão inovadora que não exista nada igual, mesmo assim existem concorrentes.</Text>
        </BlockContainer>

        <BlockContainer>
          <Title2>Você deve procurar mapear e estudar os concorrentes:</Title2>
          <Text>• empresas tradicionais que atendem o cliente, mesmo que de formas diferentes;</Text>
          <Text>• alternativas que os clientes já possuem para resolver o problema;</Text>
          <Text>• alternativas mesmo que atendam pequenas partes da solução;</Text>
          <Text>• novas empresas (startups) que ainda podem ser pouco conhecidas;</Text>
          <Text>• Dica: o quanto mais você conhecer o problema, os clientes e o mercado, mais você vai descobrir sobre os atuais e futuros concorrentes.</Text>
        </BlockContainer>

        <Block>
          <TitleLight>Atividade</TitleLight>
          <Text style={{ color: colors.white }}>Descreva três características principais que você acha que a sua startup é melhor que os outros.</Text>
          <Text style={{ color: colors.white }}>Liste os concorrentes e avalie a situação de cada concorrente em cada uma das características.</Text>
        </Block>


        <BlockContainer>
          <Text>Nota:</Text>
          <Text style={{ marginTop: 0 }}>Adicione nas notas dados e links das fontes de pesquisa que você utilizou para comprovar as suas hipóteses de tamanho de mercado.</Text>
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