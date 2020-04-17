import React from 'react';
import {
  ScrollView,
  Title,
  Image,
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
    <Title style={{ color: colors.background }}>A jornada de uma startup</Title>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />
    <Text style={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', color: colors.primary, textAlign: 'center', marginBottom: 30 }}>incertezas</Text>
    <BlockTextCard>
      <TitleTextBlock>HIPÓTESE</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>já temos uma ideia mas ainda não sabemos como será o produto ou o negócio.</TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>VALIDAÇÃO</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>já estamos fazendo o produto mais ainda não sabemos o que vai fazer alguém querer utilizar.</TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>NEGÓCIO</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>Já temos o produto validado  mas não sabemos como conquistar mais clientes e viabilizar o negócio.</TextBlock>
    </BlockTextCard>

    <BlockTextCard>
      <TitleTextBlock>escala</TitleTextBlock>
      <TextBlock style={{ textAlign: 'center' }}>Já temos clientes e o negócio é viável, mas não sabemos como acelerar o crescimento.</TextBlock>
    </BlockTextCard>
  </ScrollView>
)

export default Page3;