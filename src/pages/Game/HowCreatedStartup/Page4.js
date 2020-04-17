import React from 'react';
import {
  ScrollView,
  Title,
  Row,
  BlockCol,
  Figure,
  Progress,
  Number,
  TitleBlock,
  SubTitle,
  BlockText,
  TitleTextBlock,
  TextBlock
} from './styles'

import Step3 from '@assets/images/fase_03.png';
import Step4 from '@assets/images/fase_04.png';
import Step5 from '@assets/images/fase_05.png';

import { colors } from '@/styles';

const Page4 = ({ }) => (
  <ScrollView contentContainerStyle={{
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingBottom: 150
  }}>
    <Title style={{ color: colors.background }}>A Fórmula Mágica (=XYZ)</Title>
    <SubTitle style={{ textAlign: 'left', color: colors.background }}>JOGANDO O JA STARTUP:{'\n'}RESOLVA OS FATORES X , Y e Z PARA RESOLVER A EQUAÇÃO XYZ DA SUA NOVA STARTUP</SubTitle>

    <Row>
      <BlockCol style={{ paddingLeft: 0 }}>
        <Figure source={Step4} />
        <Progress>
          <Number>4</Number>
          <TitleBlock>o produto {'\n'}é bom?</TitleBlock>
        </Progress>
      </BlockCol>
      <BlockCol>
        <Figure source={Step3} />
        <Progress>
          <Number>2</Number>
          <TitleBlock>a ideia é boa?</TitleBlock>
        </Progress>
      </BlockCol>
      <BlockCol style={{ paddingRight: 0 }}>
        <Figure source={Step5} />
        <Progress>
          <Number>2</Number>
          <TitleBlock>o negócio{'\n'}é bom?</TitleBlock>
        </Progress>
      </BlockCol>
    </Row>

    <BlockText>
      <TitleTextBlock>JOGANDO O JA STARTUP:</TitleTextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• STARTUP ÉA FASE DE VALIDAÇÃO DE UM NOVO NEGÓCIO INOVADOR</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• A MEDIDA QUE A STARTUP SE CONSOLIDA ESTA VAI SE TORNANDO EM UMA EMPRESA ESTABELECIDA.</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• NÃO EXISTE UMA CARACTERÍSTICA ÚNICA OU MOMENTO CLARO QUANDO ESTA DEIXA DE SER UMA STARTUP E SE TORNA UMA EMPRESA.</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• ALGUNS DIZEM QUE QUANDO A MAIORIA DAS PESSOAS AINDA ESTÁ DEDICADA A INOVAÇÃO SIGNIFICA QUE AINDA É UMA STARTUP.</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• EXISTEM OUTROS ASPECTOS LEGAIS RELACIONADOS A CRIAR E FORMALIZAR UMA EMPRESA, NO BRASIL É QUANDO ABRIMOS UM CNPJ.</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• STARTUPS MUITO NO INÍCIO, QUANDO SÃO APENAS HIPÓTESES, NÃO PRECISAM ABRIR UM CNPJ, MAS SE PRETENDEM COMERCIALIZAR DE FATO SEUS PRODUTOS E SERVIÇOS ELAS PRECISAM REGULARIZADAS E SEGUIR TODAS AS EXIGÊNCIAS LEGAIS.</TextBlock>
      <TextBlock style={{ marginBottom: 25, textTransform: 'lowercase' }}>• AVISO: O JA STARTUP INCENTIVA E PROMOVE AS FASES MUITO INICIAIS DE UM POssível negócio mas se este projeto se mostrar viável os jogadores devem procurar ajuda para entender como criar uma empresa legalmente.</TextBlock>
    </BlockText>
  </ScrollView>
)

export default Page4;