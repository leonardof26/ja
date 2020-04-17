import React from 'react'

import Container from '@/components/Container'
import Robot from '@assets/images/robo.png'
import Button from '@/components/Button'

import {
  Image,
  Title,
  Subtitle,
  Block
} from './styles'

const Transition = ({ navigation }) => {
  return (
    <Container background="inverse">
      <Block>
        <Image source={Robot} />
        <Title>AGORA VAMOs CRIAR{'\n'}OS CONCORRENTES</Title>
        <Subtitle>Escolha até 3 ideias para votar</Subtitle>
      </Block>
      <Button
        onPress={() => navigation.navigate('List')}
        text="Avançar"
      />
    </Container>
  )
}

export default Transition;