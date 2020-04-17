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

const Page2 = ({ }) => (
  <ScrollView contentContainerStyle={{
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingBottom: 150
  }}>
    <Title style={{ color: colors.background }}>Dicas de Ouro para um jogo sério</Title>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />

    <BlockText>
      <TitleTextBlock>1° - FAÇA A COISA ACONTECER</TitleTextBlock>
      <TextBlock>Vai lá e faça a coisa acontecer, sem choro ou churumelas. Num projeto inovador a gente nunca tem certeza que o caminho escolhido é sempre o certo. Aprenda e tomar riscos pequenos e que não causam danos a você ou ninguém mais. Mas não fique parado, faça alguma coisa.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>2° - equipe é tudo</TitleTextBlock>
      <TextBlock>Jogador bom pode até ganhar um jogo, mas são as equipes que ganham campeonatos.</TextBlock>
      <TextBlock>Este é um jogo de time, e quanto mais gente com opiniões diferentes, quanto mais diversidade, melhor a qualidade do seu projeto de startup.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>3° - AGILIDADE ENSINA</TitleTextBlock>
      <TextBlock>Jogador bom pode até ganhar um jogo, mas são as equipes que ganham campeonatos.</TextBlock>
      <TextBlock>Aprenda a sonhar grande e olhar longe, mas agir em ciclos rápidos e curtos para que você consiga aprender aos poucos e de forma acelerada.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>4° - ERRE RÁPIDO E BARATO</TitleTextBlock>
      <TextBlock>Se você está tentando criar alguma coisa realmente inovadora você não tem certeza que irá funcionar.</TextBlock>
      <TextBlock>Então aprenda a aprender fazendo,a “errar de maneira certa”.</TextBlock>
      <TextBlock>Desenhar experimentos rápidos para confirmar se as coisas realmente podem funcionar. Se não funcionar, tudo bem, você aprendeu.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>5° - COLABORE SEMPRE</TitleTextBlock>
      <TextBlock>Use e abuse dos mentores, e de todas as pessoas que possuem conhecimento e experiência que possam ajudar no seu projeto.</TextBlock>
      <TextBlock>Não guarde suas ideias e dúvidas. Compartilhe. Peça ajuda. Ajude.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>6° - MUDE DE IDEIA</TitleTextBlock>
      <TextBlock>É importante ser determinado e não desistir fácil. Mas não perca a chance de aprender e reconhecer que você não estava certo. Se você descobrir que algum caminho escolhido não era o certo,  está ótimo: Você está aprendendo! Não tente convencer os outros das suas ideias, colabore para que as ideias fiquem muito melhores.</TextBlock>
    </BlockText>
  </ScrollView>
)

export default Page2;