import React from 'react';
import {
  ScrollView,
  Title,
  Image,
  BlockText,
  TitleTextBlock,
  TextBlock
} from './styles'

import Robo from '@assets/images/robo.png';

import { colors } from '@/styles';

const Page3 = ({ }) => (
  <ScrollView contentContainerStyle={{
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingBottom: 150
  }}>
    <Title style={{ color: colors.background }}>Dicas de Ouro para um jogo sério</Title>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />

    <BlockText>
      <TitleTextBlock>UM</TitleTextBlock>
      <TextBlock>O mundo está mudando muito rapidamente. Mais rápido que jamais mudou. Estas mudanças estão criando situações que nem os nossos pais e avós imaginaram existir ou tiveram que enfrentar.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>DOIS</TitleTextBlock>
      <TextBlock>Praticamente todos os tipos de empresas e profissões deverão sofrer grandes mudanças nas próximas décadas.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>TRÊS</TitleTextBlock>
      <TextBlock>As tecnologias evoluem de maneira acelerada. A cada dia estão mais acessíveis e baratas, e o conhecimento se tornou abundante, grátis.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>QUATRO</TitleTextBlock>
      <TextBlock>As novas empresas de sucesso trazem maneiras diferentes de criar produtos e atender os clientes. Elas criam negócios inovadores que estão destruindo velhas e lentas profissões e empresas.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>CINCO</TitleTextBlock>
      <TextBlock>Os novos conceitos e técnicas para criar empresas inovadores e de grande impacto estão permitindo que qualquer pessoa tenha o direito de tentar criar uma empresa incrível.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>SEIS</TitleTextBlock>
      <TextBlock>Nós sempre aprendemos olhando muito para as experiências do passado. Isto é muito seguro e nos ajuda a evitar erros. Mas agora precisamos aprender também olhando as possibilidades do futuro. Isto é inovador e nos ajuda e perceber oportunidades que antes não existiam.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>SETE</TitleTextBlock>
      <TextBlock>A verdade é que ninguém nunca vai conseguir lhe ensinar nada, se você não estiver disposto a aprender. Estudar pode ser chato, mas aprender é bom demais. Aprenda. Aprenda rápido. Aprenda sempre.</TextBlock>
    </BlockText>
  </ScrollView>
)

export default Page3;