import React from 'react';
import {
  Title,
  Text,
  Footer,
  Col,
  BlockText,
  Title2,
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

        <Title>ORGANIZAR O TIME</Title>
        <Text>Os time de startups não precisam ter cargos formais, mas é importante definirmos quem são os responsáveis por cada assunto e como utilizaremos melhor os talentos do time. Todos na startup precisam ter LIBERDADE, mas isto só acontece quando todos temos RESPONSABILIDADE.</Text>

        <BlockText>
          <Title2>Nunca esqueça:</Title2>
          <Text>É o time que faz a diferença, enquanto um craque faz jogadas, é o time que ganha campeonatos. Muitas grandes empresas definem cargos com as siglas C?O, ou Chief (qualquer coisa) Officer.</Text>
          <Text>As siglas mais populares estariam associadas às seguintes responsabilidades:</Text>
        </BlockText>

        <BlockText>
          <Title2>CEO – Executivo</Title2>
          <Text>O responsável geral que ajuda e tenta organizar tudo que precisa. (*) Nas grandes empresas o CEO é o comandante geral que está ”acima” na hierarquia, mas pense que na startup a pirâmide é invertida pois o CEO está sempre abaixo sofrendo pressão de tudo e todos.</Text>
        </BlockText>

        <BlockText>
          <Title2>CFO – Financeiro</Title2>
          <Text>Quem cuida do dinheiro, gosta de números e fazer contas.</Text>
        </BlockText>

        <BlockText>
          <Title2>CDO  - Designer</Title2>
          <Text>O criador de experiências, faz as coisas lindas, apaixonantes, desejadas.</Text>
        </BlockText>

        <BlockText>
          <Title2>CTO – Tecnologia</Title2>
          <Text>O hacker do bem, gosta do mundo digital, é a pessoa mais nerd.</Text>
        </BlockText>

        <BlockText>
          <Title2>CMO - Marketing</Title2>
          <Text>Aquela pessoa do time que é boa em convencer os outros.</Text>
        </BlockText>

        <BlockText>
          <Title2>CSO - Chief Science Officer</Title2>
          <Text>Responsável pela pesquisa e criação de novas tecnologias</Text>
        </BlockText>

        <BlockText>
          <Title2>COO – Operações</Title2>
          <Text>Cuida de tudo que é preciso para garantir as entregas para o cliente.</Text>
        </BlockText>

        <Block>
          <TitleLight>Atividade</TitleLight>
          <Text style={{ color: colors.white }}>1. Para cada membro da equipe associe um estilo C?O para ficar clara a responsabilidade;</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>2. Se tiver pouca gente na equipe uma pessoa pode ter mais que um C?O;</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>3. Se tiver muita gente na equipe vários pode dividir a responsabilidade de um C?O</Text>
          <Text style={{ color: colors.white, marginTop: 15 }}>4. O importante é todos entenderem que é um time, e que todos temos responsabilidades.</Text>
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
            onPress={() => navigation.navigate('Positions')}
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