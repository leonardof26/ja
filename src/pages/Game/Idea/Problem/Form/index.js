import React, { useState } from 'react';
import {
  Content,
  Text,
  Footer
} from './styles'


import Header from '@/components/Header';
import FormGroup from '@/components/FormGroup'
import Button from '@/components/Button';
import Container from '@/components/Container';
import ContentView from '@/components/ContentView';

import BackgroundHeader from '@assets/images/background_fase_03.png'
import { colors } from '@/styles';

const Form = ({ navigation, route: { params: { mainNavigation } } }) => {
  const [problem, setProblem] = useState('');

  return (
    <Container>
      <Header
        title="descrever problema"
        subtitle="Descreva um problema que pretende solucionar"
        image={BackgroundHeader}
      />
      <Content>
        <FormGroup
          label="Descrição do problema"
          multiline={true}
          baseColor={colors.primary}
          textColor={colors.dark}
          blurOnSubmit={true}
          maxLength={300}
          onChangeText={(text) => setProblem(text)}
        />
        <Text>{problem.length} / 300</Text>
      </Content>
      <Footer>
        <Button
          text="Avançar"
          onPress={() => navigation.navigate('Congratulation')}
        />
      </Footer>
    </Container>
  )
}

export default Form;