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
  const [value, setValue] = useState('');

  return (
    <Container>
      <Header
        title="proposta de valor"
        subtitle="Crie uma proposta de valor para a sua StartUP"
        image={BackgroundHeader}
      />
      <Content>
        <FormGroup
          label="Descrição da proposta de valor"
          multiline={true}
          baseColor={colors.primary}
          textColor={colors.dark}
          blurOnSubmit={true}
          maxLength={50}
          onChangeText={(text) => setValue(text)}
        />
        <Text>{value.length} / 50</Text>
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