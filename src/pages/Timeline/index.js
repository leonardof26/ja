import React, { useState } from 'react';

import Map from '@assets/images/mapa.png';

import {
  StyledContainer,
  Body,
  MapGame,
  Block,
  Figure,
  Number,
  Title,
  Progress,
  Bar
} from './styles';

import Step1 from '@assets/images/fase_01.png';
import Step2 from '@assets/images/fase_02.png';
import Step3 from '@assets/images/fase_03.png';
import Step4 from '@assets/images/fase_04.png';
import Step5 from '@assets/images/fase_05.png';
import Step6 from '@assets/images/fase_06.png';
import Step7 from '@assets/images/fase_07.png';

const Timeline = ({ navigation, route, ...props }) => {
  let [offsetImage, setOffsetImage] = useState(0);

  let [game, setGame] = useState({
    forms: {
      how_working: {
        verify: 0,
        total: 3,
        enable: true,
      },
      how_created_startup: {
        verify: 0,
        total: 6,
        enable: false,
      },
      idea: {
        verify: 0,
        total: 7,
        enable: false,
      },
      product: {
        verify: 0,
        total: 4,
        enable: false,
      },
      business: {
        verify: 0,
        total: 3,
        enable: false,
      },
      pitch: {
        verify: 0,
        total: 1,
        enable: false,
      },
      demoDay: {
        verify: 0,
        total: 1,
        enable: false,
      }
    }
  });
  let [steps] = useState([
    {
      number: 7,
      title: 'Demo Day',
      image: Step7,
      slug: 'demoDay',
      url: 'HowWorking'
    },
    {
      number: 6,
      title: `O pitch${'\n'}é bom?`,
      image: Step6,
      slug: 'pitch',
      url: 'HowWorking'
    },
    {
      number: 5,
      title: `O negócio${'\n'}é bom?`,
      image: Step5,
      slug: 'business',
      url: 'HowWorking'
    },
    {
      number: 4,
      title: `O produto${'\n'}é bom?`,
      image: Step4,
      slug: 'product',
      url: 'Product'
    },
    {
      number: 3,
      title: 'a idéia é boa?',
      image: Step3,
      slug: 'idea',
      url: 'Idea'
    },
    {
      number: 2,
      title: `como criar${'\n'}uma startup`,
      image: Step2,
      slug: 'how_created_startup',
      url: 'HowCreatedStartup'
    },
    {
      number: 1,
      title: `como funciona${'\n'}o ja startup?`,
      image: Step1,
      slug: 'how_working',
      url: 'HowWorking'
    },
  ])

  let scrollView = '';

  console.log('game: ', game)

  return (
    <StyledContainer
      ref={(ref) => scrollView = ref}
      onContentSizeChange={() => {
        const calc = offsetImage === 0 ? offsetImage : offsetImage - 1200;
        if (scrollView && offsetImage > 0) {
          setTimeout(() => {
            scrollView.scrollTo({
              x: 0,
              y: calc,
              animated: true,
            })
          }, 1500)
        }
      }}
    >
      <MapGame
        source={Map}
        resizeMode="cover"
        width="100%"
        onLayout={(e) => {
          setOffsetImage(e.nativeEvent.layout.height)
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          left: '-30%'
        }}
      />
      <Body>
        {steps.map(item => {
          const progress = (100 * game.forms[item.slug].verify) / game.forms[item.slug].total;
          return (
            <Block
              onPress={() => route.params.screenNavigation.navigate(item.url, { game, setGame })}
            // disabled={!game.forms[item.slug].enable}
            // style={{
            //   opacity: !game.forms[item.slug].enable ? 0.5 : 1
            // }}
            >
              <Figure source={item.image} />
              <Progress>
                <Bar style={{ width: `${progress}%` }} />
                <Number>{item.number}</Number>
                <Title>{item.title}</Title>
              </Progress>
            </Block>
          )
        })}
      </Body>
    </StyledContainer>
  );

};

export default Timeline;
