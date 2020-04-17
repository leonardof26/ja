import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import BackgroundBottomAsset from '@assets/images/bottom-asset.png'

import {
  Footer,
  ButtonSecondary,
  Bar,
  Col
} from './styles'

import Button from '../Button';
import { colors } from '@/styles';

const FooterButton = ({ text, onPress, single = false, onBack, disabled = false, customStyles }) => {
  return (
    <Footer
      source={BackgroundBottomAsset}
      imageStyle={{
        resizeMode: 'contain',
        bottom: single ? -10 : 30,
        left: 0,
        width: '100%'
      }}
    >
      <Button
        text={text || 'Avançar'}
        onPress={onPress}
        disabled={disabled}
        customStyles={{
          marginBottom: 30,
          ...customStyles
        }}
      />
      {!single && <Bar>
        <Col>
          <ButtonSecondary onPress={() => onBack()}>
            <FontAwesome name="arrow-left" color={colors.white} size={18} />
          </ButtonSecondary>
        </Col>
        <Col style={{ alignItems: 'flex-end' }}>
          <ButtonSecondary>
            <FontAwesome name="question" color={colors.white} size={18} />
          </ButtonSecondary>
        </Col>
      </Bar>}
    </Footer>
  )
}

export default FooterButton;