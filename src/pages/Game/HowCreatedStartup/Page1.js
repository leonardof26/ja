import React from 'react';
import {
  ScrollView,
  Title,
  SubTitle,
  Image,
  BlockText,
  TitleTextBlock,
  TextBlock,
} from './styles';

import Robo from '@assets/images/robo.png';

import { colors } from '@/styles';

const Page1 = ({}) => (
  <ScrollView
    contentContainerStyle={{
      paddingVertical: 60,
      paddingHorizontal: 32,
      alignItems: 'center',
      paddingBottom: 150,
    }}
  >
    <Title style={{ color: colors.background }}>COMO CRIAR UMA STARTUP</Title>
    <SubTitle style={{ color: colors.background }}>
      Aprenda os fundamentos e como o{'\n'}JA Startup pode lhe ajudar a criar
      {'\n'}uma startup do zero.
    </SubTitle>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />

    <BlockText>
      <TitleTextBlock>O que é uma startup?</TitleTextBlock>
      <TextBlock>
        Não existe uma definição exata e definitiva sobre o que é uma startup,
        mas a nossa definição ajuda entender os principais aspectos:
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>PERÍODO TEMPORÁRIO E INTENSO?</TitleTextBlock>
      <TextBlock>
        Sim! Startup significa o período inicial, e um dia ela deve acabar. Ou
        ela valida que de fato o negócio funciona e esta se transforma numa
        empresa, ou confirma o contrário e por isto o experimento deve encerrar.
        No menor tempo possível e gastando a menor quantidade de dinheiro
        possível, a startup deveria rodar experimentos para VALIDAR se de fato a
        ideia é boa, se o produto é bom e se o negócio é viável.
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>TECNOLÓGICO?</TitleTextBlock>
      <TextBlock>
        As startups são sempre associadas a empresas de tecnologia. Mas, na
        verdade, todas as empresas modernas terão tecnologias embarcadas nos
        seus produtos e serviços, ou senão em algum processo muito importante
        para o seu funcionamento.{' '}
      </TextBlock>
      <TextBlock>Pense diferente:</TextBlock>
      <TextBlock>
        Todas as empresas são de tecnologia, pois até o papel e caneta um dia
        foram “tecnologias inovadoras”.
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>TECNOLÓGICO?</TitleTextBlock>
      <TextBlock>
        Sim! O termo startup está diretamente relacionado aintenção de criar um
        negócio inovador. Esta inovação pode vir de um produto diferente, de uma
        forma diferente de organizar a empresa, de uma maneira diferente de
        conquistar os clientes ou de uma maneira diferente de cobrar pelo seu
        uso. As startups mais incríveis são aquelas que consegue pensar e
        implementar um forma nova de fazer negócios, ou seja, capazes de inovar
        o “modelo de negócios”.
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>REPETÍVEL E ESCALÁVEL?</TitleTextBlock>
      <TextBlock>
        Sim! A boa startup é aquela faz o “hipopótamo abrir a boca”.
        Escalabilidade representa a parte de cima da boca e significa que o
        aumento acelerado de novos usuários e receitas. Já a repetibilidade
        representa a parte de baixo da boca e significa que mesmo a startup
        crescendo de maneira acelerada os custos e recursos não crescem na mesma
        proporção.{' '}
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>EXTREMA INCERTEZA?</TitleTextBlock>
      <TextBlock>
        Infelizmente Sim! Pense o seguinte: quanto mais inovador e diferente for
        a ideia de sua startup, menos certeza podemos ter que ela vai funcionar.
        Isto não é um erro, é simplesmente uma característica das ideias muito
        inovadoras. Quando você imagina coisas muito inovadoras não adianta
        planejar demais pois você nunca sabe exatamente como será. A técnica
        correta é criar experimentos rápidos para você validar e corrigir as
        ações a medida que você aprende.{' '}
      </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>MOONSHOT?</TitleTextBlock>
      <TextBlock>
        Projetos que pensam em melhorar 10% algo que existe, são negócios
        melhores, e tendem a não combinar tanto com o estilo startup. Startups
        combinam mais com negócios que pretendem soluções 10X melhores do que
        existe, embora neste caso eles sejam mais incertos.{' '}
      </TextBlock>
      <TextBlock>
        Algumas startups são ainda mais ousadas e pretendem ser ainda
        “exponencialmente melhores”, como se fosse 10x, o que chamamos de
        MOONSHTOS.
      </TextBlock>
    </BlockText>
  </ScrollView>
);

export default Page1;
