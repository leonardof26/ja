import React, { useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import {
  Content,
  Row,
  Col,
  ContentFigure,
  Figure,
  Text,
  Tab,
  TabButton,
  TabText,
  TabTextActive
} from './styles'


import Header from '@/components/Header';
import FormGroup from '@/components/FormGroup'
import Button from '@/components/Button';
import Container from '@/components/Container';
import ContentView from '@/components/ContentView';
import FooterButton from '@/components/FooterButton';

import BackgroundHeader from '@assets/images/background_fase_03.png'
import { colors, metrics } from '@/styles';

function renderItem({ item, index }, client, setClient) {
  switch (index) {
    case 0:
      return (
        <Content>
          <Row
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Col style={{ flex: 1, alignItems: 'flex-start' }}>
              <ContentFigure>
                <FontAwesome name="user" size={48} color="#7B7B7B" />
              </ContentFigure>
            </Col>
            <Col style={{ paddingLeft: 20 }}>
              <Button
                text="Adicionar FOTO"
                customStyles={{
                  backgroundColor: colors.secundary,
                  paddingHorizontal: 20,
                  paddingVertical: 11
                }}
              />
            </Col>
          </Row>

          <FormGroup
            label="Nome da persona"
            baseColor={colors.primary}
            textColor={colors.dark}
          />

          <Row>
            <Col style={{ width: '40%', paddingRight: 17 }}>
              <FormGroup
                label="Idade"
                baseColor={colors.primary}
                textColor={colors.dark}
                keyboardType='number-pad'
                maxLength={2}
              />
            </Col>
            <Col style={{ width: '60%', paddingLeft: 17 }}>
              <FormGroup
                label="Sexo"
                baseColor={colors.primary}
                textColor={colors.dark}
              />
            </Col>
          </Row>

          <FormGroup
            label="Localidade"
            baseColor={colors.primary}
            textColor={colors.dark}
          />

          <FormGroup
            label="Características gerais"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>
        </Content>
      )
    case 1:
      return (
        <Content>

          <FormGroup
            label="Fala"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>


          <FormGroup
            label="Faz"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>
        </Content>
      )
    case 2:
      return (
        <Content>

          <FormGroup
            label="Vê"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>


          <FormGroup
            label="Ouve"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>
        </Content>
      )
    case 3:
      return (
        <Content>

          <FormGroup
            label="Sente"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>


          <FormGroup
            label="Pensa"
            multiline={true}
            blurOnSubmit={true}
            maxLength={50}
            baseColor={colors.primary}
            textColor={colors.dark}
            customStyles={{
              marginBottom: 0
            }}
          />
          <Text>50/50</Text>
        </Content>
      )
  }
}

function renderDots(data, total, context, carouselRef) {
  const TabContext = ({ active, id, children }) => {
    if (active === id) {
      return (
        <TabTextActive>{children}</TabTextActive>
      )
    }

    return <TabText>{children}</TabText>
  }
  return (
    <Tab>
      <TabButton onPress={() => carouselRef.snapToItem(0)}>
        <TabContext active={data} id={0}>Persona</TabContext>
      </TabButton>
      <TabButton onPress={() => carouselRef.snapToItem(1)}>
        <TabContext active={data} id={1}>Fala e faz</TabContext>
      </TabButton>
      <TabButton onPress={() => carouselRef.snapToItem(2)}>
        <TabContext active={data} id={2}>Vê e ouve</TabContext>
      </TabButton>
      <TabButton onPress={() => carouselRef.snapToItem(3)}>
        <TabContext active={data} id={3}>Sente e pensa</TabContext>
      </TabButton>
    </Tab>
  )
}

const Form = ({ navigation, route: { params: { mainNavigation } } }) => {
  const [carouselRef, setCarouselRef] = useState(null);
  const [client, setClient] = useState({
    name: '',
    old: '',
    gender: '',
    locality: '',
    description: '',
    speaks: '',
    does: '',
    see: '',
    hear: '',
    feel: '',
    think: ''

  });

  const [activeSlide, setActiveSlide] = useState(0);

  const data = ['persona', 'speakAndFeel', 'seeAndHear', 'sitAndThink']

  return (
    <Container>
      <Header
        title="cliente imaginário"
        subtitle="Crie um cliente imaginário"
        image={BackgroundHeader}
      />

      <ContentView>
        {
          carouselRef &&
          <Pagination
            dotsLength={data.length}
            renderDots={(data, total, context) => renderDots(data, total, context, carouselRef)}
            activeDotIndex={activeSlide}
          />
        }
        <Carousel
          ref={ref => { setCarouselRef(ref) }}
          data={data}
          renderItem={(e) => renderItem(e, client, setClient)}
          itemWidth={metrics.screenWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
          sliderWidth={metrics.screenWidth}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          inactiveDotStyle={{
            width: 8,
            height: 8,
            backgroundColor: 'rgba(0,0,0,0.2)'
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 8,
            marginHorizontal: 8,
            backgroundColor: colors.primary
          }}
        />
      </ContentView>
      <FooterButton
        text={activeSlide === 3 ? 'Concluir' : 'Avançar'}
        onPress={() => {
          if (activeSlide === 3) {
            return navigation.navigate('Congratulation')
          }

          setActiveSlide(activeSlide + 1)
          carouselRef.snapToNext()
        }}
        onBack={() => {
          if (activeSlide === 0) {
            return navigation.goBack();
          }
          return carouselRef.snapToPrev();
        }}
      />
    </Container>
  )
}

export default Form;