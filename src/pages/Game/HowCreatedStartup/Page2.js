import React from 'react';
import {
  ScrollView,
  Title,
  Image,
  SubTitle,
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
    <Title style={{ color: colors.background }}>Quais os tipos de startups?</Title>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />

    <BlockText>
      <TitleTextBlock>ESTILO DE VIDA</TitleTextBlock>
      <TextBlock>Na startup estilo de vida (lifestyle) o fator principal é que os fundadores (empreendedores iniciando a startup) estão perseguindo uma paixão, uma realização pessoal.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>FOCO SOCIAL</TitleTextBlock>
      <TextBlock>Jogador bom pode até ganhar um jogo, mas são as equipes que ganham campeonatos.</TextBlock>
      <TextBlock>Na startup de foco social (social business) o fator principal é que os fundadores perseguem uma causa e não o lucro. Embora todas as empresas modernas precisam ter propósitos verdadeiros e que beneficiem os outros, estas startups possuem isto como objetivo principal e não visam lucro financeiro.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>PEQUENOS NEGÓCIOS</TitleTextBlock>
      <TextBlock>Jogador bom pode até ganhar um jogo, mas são as equipes que ganham campeonatos.</TextBlock>
      <TextBlock>Na startup que não tem como objetivo crescer demais (smallbusiness) os fundadores buscam um negócio de tamanho suficiente para alcançarem uma boa vida, mas não necessariamente grandes resultados ou grande escala. Estas startups podem ser ótimos negócios para os fundadores, mas possivelmente não sejam atraentes para investidores profissionais.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>ESCALÁVEIS FOGUETES</TitleTextBlock>
      <TextBlock>Se você está tentando criar alguma coisa realmente inovadora você não tem certeza que irá funcionar.</TextBlock>
      <TextBlock>Na startup típica (scalable) o objetivo é a escala, o crescimento rápido, o mercado global, o moonshot. Embora muitas pensem assim, são poucas as que realmente conseguem. Mas isto não é um problema ou um insucesso. Muitos acreditam que “sonhar grande” custa o mesmo que “sonhar pequeno”, e que quando você busca grandes conquistas você consegue ir muito além do que mirar em objetivos pouco ousados.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>A VENDA</TitleTextBlock>
      <TextBlock>Na startup criada para ser vendida (buyable) a estratégia dos fundadores é criar um negócio que já se imagina será adquirida por alguma grande empresa já estabelecida. Estas startups são criadas visando acoplar ou complementar negócios de outras empresas que já tem sucesso e com a expectativa que estas empresas maiores reconheçam em algum momento que á mais fácil adquirir esta nova startup do que começar a sua do zero.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>INTERNAS</TitleTextBlock>
      <TextBlock>nA sTARTUP INTERNA DE uma empresa (ás vezes chamadas de start-in) a intenção é utilizar o estilo das startups para desenvolver projetos internos. Estes projetos podem buscar atender um problema interno da empresa, ou até mesmo criar um novo produto ou empresa a partir da empresa mãe. Muitas empresas estão tentando entender e utilizar este modelo de startups para acelerar a sua inovação interna.</TextBlock>
    </BlockText>
  </ScrollView>
)

export default Page2;