import React from 'react'

import {
  Block,
  Circle,
  CircleText,
  Col,
  TextDescription
} from './styles'

import Header from '@/components/Header'
import Container from '@/components/Container'
import ContentView from '@/components/ContentView'
import FooterButton from '@/components/FooterButton'

import BackgroundHeader from '@assets/images/background_fase_03.png'
import FormGroup from '@/components/FormGroup'
import { colors } from '@/styles'

const Form = ({ navigation, route: { params: { mainNavigation } } }) => {

  return (
    <Container>
      <Header
        title="mapear concorrentes"
        subtitle="Crie 3 caracteristicas"
        image={BackgroundHeader}
      />

      <ContentView customStyle={{
        paddingHorizontal: 32
      }}>
        <Block>
          <Col style={{ width: '20%' }}>
            <Circle>
              <CircleText>A</CircleText>
            </Circle>
          </Col>
          <Col style={{ width: '80%' }}>
            <FormGroup
              textColor={colors.dark}
              baseColor={colors.primary}
              label="Característica A"
            />
            <TextDescription>0/25</TextDescription>
          </Col>
        </Block>
        <Block>
          <Col style={{ width: '20%' }}>
            <Circle>
              <CircleText>B</CircleText>
            </Circle>
          </Col>
          <Col style={{ width: '80%' }}>
            <FormGroup
              textColor={colors.dark}
              baseColor={colors.primary}
              label="Característica B"
            />
            <TextDescription>0/25</TextDescription>
          </Col>
        </Block>
        <Block>
          <Col style={{ width: '20%' }}>
            <Circle>
              <CircleText>C</CircleText>
            </Circle>
          </Col>
          <Col style={{ width: '80%' }}>
            <FormGroup
              textColor={colors.dark}
              baseColor={colors.primary}
              label="Característica C"
            />
            <TextDescription>0/25</TextDescription>
          </Col>
        </Block>
      </ContentView>
      <FooterButton
        onPress={() => navigation.navigate('Transition')}
        onBack={() => navigation.goBack()}
      />
    </Container>
  )
}

export default Form;