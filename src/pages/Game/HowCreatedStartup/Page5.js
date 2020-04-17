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

const Page5 = ({ }) => (
  <ScrollView contentContainerStyle={{
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
    paddingBottom: 150
  }}>
    <Title style={{ color: colors.background }}>Aprendendo o idioma das startups</Title>
    <Image style={{ marginTop: 20, marginBottom: 40 }} source={Robo} />

    <BlockText>
      <TitleTextBlock>PITCH</TitleTextBlock>
      <TextBlock>O “pitch” do elevador faz lembrar o desaﬁo de você entrar no elevador com alguém que você deseja “vender a sua ideia”, mas você tem muito pouco tempo para isto. O termo “pitch” então é utilizado para descrever uma apresentação rápida e interessante utilizada para capturar a atenção de uma audiência especíﬁca para com a startup.O “pitch” pode ter o formato de uma frase, num e-mail, num telefonema, mas o mais comum é uma breve apresentação de alguns minutos. </TextBlock>
      <TextBlock>Este “pitch” pode ser feito para um investidor (você deseja capital para investir), um mentor (você deseja conselhos de alguém experiente), de um potencial parceiro (você precisa de ajuda) ou de um cliente (possivelmente o mais importante de todos).</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>B2C e B2B</TitleTextBlock>
      <TextBlock>B2B ou B-to-B, é sigla em  inglês  de “business to business”, ou seja, “de empresa para empresa”.  Isto significa que a sua startup (sua empresa) vende direto para outras empresas.</TextBlock>
      <TextBlock>B2C ou B-to-C, é sigla de em inglês de “business to consumer”, ou seja, “da empresa para um consumidor final”. Insto significa que a suam startup vende direto para pessoas, não empresas.</TextBlock>
      <TextBlock>É simples assim, ou o seu negócio vende para outras empresas (B2B) ou vende para pessoas (B2C).</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>INTERATE e ITERATE</TitleTextBlock>
      <TextBlock>Traduzindo do inglês, INTERAR (iterate) e INTERAR (interate). Iterar significa repetir várias vezes enquanto interar significa interagir com outros. Estes dois termos são os grandes segredos do processo de desenvolvimento e aprendizado de uma startup.</TextBlock>
      <TextBlock>Você precisa interagir muito, pois se você ficar isolado em casa sem apresentar as suas ideias e ver os que as pessoas acham, você não vai aprender nada e vai ficar sempre achando que a sua ideia é maravilhosa, quando na verdade ela deveria mudar muito.</TextBlock>
      <TextBlock>Você precisa iterar muito, pois quanto mais vezes você repetir mais você irá confirmar que este é o caminho ou se você precisa mudar alguma coisa. </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>PIVOT</TitleTextBlock>
      <TextBlock>Todos já ouvimos falar do pivô do basquete. É aquele jogador que recebe a boal e gira o corpo mantendo uma perna como apoio.</TextBlock>
      <TextBlock>No universo das startups usamos a palavra “pivot” para explicar quando você está seguindo numa direção mas descobre algo novo, você aprende algo durante a sua jornada e decide “mudar a direção”.</TextBlock>
      <TextBlock>No mundo das startups – visto que você está criando algo inovador –não funciona criar e seguir um plano infalível. A medida que você vai fazendo você vai aprendendo e vendo que você está errado, e portanto é muito bom quando você aprende e muda de ideia e corrige rápido (pivot).</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>GET THINGS DONE</TitleTextBlock>
      <TextBlock>Traduzindo isso significa “faça a coisa acontecer”.</TextBlock>
      <TextBlock>No mundo das startups a gente nunca tem o tempo que precisa, os recursos que precisa a informação que precisa... nunca temos o ambiente ideal. Mas não podemos parar de aprender. </TextBlock>
      <TextBlock>Então chega de mi-mi-mi, seja criativo, e invente uma maneira de não parar de evoluir o seu negócio. </TextBlock>
      <TextBlock>Se a necessidade é a “mãe da inovação”, então a falta de recursos deveria ser a “tia da sua criatividade”.</TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>FAIL FAST, FAIL SOON</TitleTextBlock>
      <TextBlock>Traduzindo isso significa "Erre rápido, erre logo”. </TextBlock>
      <TextBlock>Não! Ninguém está incentivando você a errar. A dica quente das startups é “aprenda rápido, aprenda logo”</TextBlock>
      <TextBlock>Se você está tentando fazer algo realmente inovador, então fica difícil você perguntar para quem já fez.Simplesmente por que pouca gente, ou quase ninguém deve ter feito isto desta maneira.</TextBlock>
      <TextBlock>Então você precisa ser um especialista em criar ideias e promover testes rápidos para aprender rápido. Você pode errar, talvez você deva errar para aprender. Mas, estes erros devem ser sem causar danos para você e para os outros. </TextBlock>
      <TextBlock>E esta é uma característica importante dos empreendedores de sucesso, eles conseguem definir maneiras simples de testar coisas novas sem causar danos para as outras pessoas. </TextBlock>
    </BlockText>

    <BlockText>
      <TitleTextBlock>UNICÓRNIOS</TitleTextBlock>
      <TextBlock>Unicórnios é uma expressão utilizada para designar startups que alcançaram um valor de mercado de U$ 1 Bilhão.</TextBlock>
      <TextBlock>Pense assim, se algum investidor investir R$ 100 Milhões e receber em troca 10% da empresa é porque esta empresa deve valar 10 xU$ 100M, ou seja, U$ 1Bilhão.</TextBlock>
      <TextBlock>O termo unicórnio inicialmente foi utilizado como brincadeira, pois representava um animal imaginário e que nunca iria existir. Mas nos últimos anos a quantidade de “startups unicórnios” cresceu muito. </TextBlock>
    </BlockText>
  </ScrollView>
)

export default Page5;