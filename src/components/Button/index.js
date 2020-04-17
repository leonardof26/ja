import React from 'react';
import {
  ButtonCustom,
  TextButton
} from './styles';
import LottieView from 'lottie-react-native';
import loadingAnimate from '@assets/animations/loading_button.json';


const Button = ({ text, loading = false, customStyles, customStylesText, ...props }) => (
  loading ? (
    <LottieView
      source={loadingAnimate}
      autoPlay
      loop
      style={{
        width: 100
      }}
    />
  ) :
    (
      <ButtonCustom {...props} style={{
        paddingHorizontal: 80,
        paddingVertical: 12,
        ...customStyles
      }}>
        <TextButton style={customStylesText}>{text}</TextButton>
      </ButtonCustom>
    )


)

export default Button;