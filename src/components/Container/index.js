import React from 'react';
import {
  StyledContainer,
  Body,
  StyledContainerLight,
  Footer,
  Main,
} from './styles';

import BackgroundBottomAsset from '@assets/images/bottom-asset.png'
import BackgroundTopAsset from '@assets/images/top-asset.png'
import Background from '@assets/images/top_background_02.png'
import { Dimensions } from 'react-native';


const Container = ({ children, background = null, customStyle }) => {
  switch (background) {
    case 'inverse':
      return (
        <StyledContainer
          source={BackgroundTopAsset}
          style={customStyle}
          imageStyle={{
            resizeMode: "contain",
            bottom: '90%',
            top: -25
          }}
        >
          <Body>
            {children}
          </Body>
          <Footer
            source={BackgroundBottomAsset}
            imageStyle={{
              resizeMode: 'contain',
              top: -63,
              left: '-50%',
              width: '100%'
            }}
          />
        </StyledContainer>
      )
    case 'light':
      return (

        <StyledContainerLight
          source={Background}
          resizeMode="contain"
          style={customStyle}
          imageStyle={{
            bottom: '80%',
            top: -13
          }}
        >
          {children}
        </StyledContainerLight>
      )
    default:

      return (
        <Main style={customStyle}>
          {children}
        </Main>
      )
  }

}

export default Container;