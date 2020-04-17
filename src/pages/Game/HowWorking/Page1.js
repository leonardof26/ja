import React from 'react';
import {
  ScrollView,
  Title,
  SubTitle,
  Block,
  Figure,
  Number,
  TitleBlock,
  Progress,
  TextSmall,
  Row,
  BlockCol
} from './styles'

import Step1 from '@assets/images/fase_01.png';
import Step2 from '@assets/images/fase_02.png';
import Step3 from '@assets/images/fase_03.png';
import Step4 from '@assets/images/fase_04.png';
import Step5 from '@assets/images/fase_05.png';
import Step6 from '@assets/images/fase_06.png';
import Step7 from '@assets/images/fase_07.png';

import { colors } from '@/styles';

const Page1 = ({ }) => (
  <ScrollView contentContainerStyle={{
    backgroundColor: colors.background,
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingBottom: 150
  }}>
    <Title>COMO FUNCIONA O JA STARTUP?</Title>
    <SubTitle>APRENDER E DESENVOLVER O PROJETO DE{'\n'}UMA NOVA STARTUP</SubTitle>
    <Block>
      <Figure source={Step1} />
      <Progress>
        <Number>1</Number>
        <TitleBlock>como funciona{'\n'}o ja startup?</TitleBlock>
      </Progress>
    </Block>
    <TextSmall>Fases para aprender e praticar a criação de{'\n'}uma startup. aprender e desenvolver o projeto{'\n'}de uma nova startup</TextSmall>
    <Row>
      <BlockCol style={{ paddingLeft: 0 }}>
        <Figure source={Step2} />
        <Progress>
          <Number>2</Number>
          <TitleBlock>como criar{'\n'}uma startup</TitleBlock>
        </Progress>
      </BlockCol>
      <BlockCol style={{ paddingRight: 0 }}>
        <Figure source={Step3} />
        <Progress>
          <Number>3</Number>
          <TitleBlock>como criar{'\n'}uma startup</TitleBlock>
        </Progress>
      </BlockCol>


      <BlockCol style={{ paddingLeft: 0 }}>
        <Figure source={Step4} />
        <Progress>
          <Number>4</Number>
          <TitleBlock>como criar{'\n'}uma startup</TitleBlock>
        </Progress>
      </BlockCol>
      <BlockCol style={{ paddingRight: 0 }}>
        <Figure source={Step5} />
        <Progress>
          <Number>5</Number>
          <TitleBlock>como criar{'\n'}uma startup</TitleBlock>
        </Progress>
      </BlockCol>



      <BlockCol style={{ paddingLeft: 0 }}>
        <Figure source={Step6} />
        <Progress>
          <Number>6</Number>
          <TitleBlock>o pitch é bom?</TitleBlock>
        </Progress>
      </BlockCol>
      <BlockCol style={{ paddingRight: 0 }}>
        <Figure source={Step7} />
        <Progress>
          <Number>7</Number>
          <TitleBlock>Demo day</TitleBlock>
        </Progress>
      </BlockCol>
    </Row>
  </ScrollView>
)

export default Page1;