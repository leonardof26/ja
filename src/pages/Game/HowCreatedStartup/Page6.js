import React from 'react';
import {
  ScrollView,
  Title,
  Image,
  SubTitle,
  BlockTextCard,
  TitleTextBlock,
  TextBlock,
  Text
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
    <Title style={{ color: colors.background }}>Mergulhando Fundo (TBD)</Title>
    <SubTitle style={{ color: colors.background }}>QUER IR MAIS A FUNDO? ENTÃO PESQUISE SOBRE OS MODERNOS CONCEITOS E MÉTODOS DE EMPREENDER</SubTitle>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />
    <Text style={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', color: colors.primary, textAlign: 'center', marginBottom: 30 }}>incertezas</Text>
    <BlockTextCard>
      <TitleTextBlock>HIPÓTESE</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>
        • Design Thinking{'\n'}
        • Customer Development{'\n'}
        • Business Model Canvas
      </TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>VALIDAÇÃO</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>
        • A Startup Enxuta{'\n'}
        • O EstiloStartup{'\n'}
        • MétodosÁgeis
      </TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>NEGÓCIO</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>
        • Life Time Value{'\n'}
        • Growth Hacking{'\n'}
        • Customer Centricity
      </TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>escala</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>
      • Organizações exponenciais{'\n'}
      • Blitzscaling{'\n'}
      • Venture Capital
      </TextBlock>
    </BlockTextCard>
  </ScrollView>
)

export default Page3;