import React from 'react';
import { SvgUri } from 'react-native-svg';
import { colors } from '@/styles';
import Icons from '@/utils/icons';

export default ({ type, size, color }) => {

  if (!type) {
    return null;
  }

  const icon = Icons[type];
  
  return (
    <SvgUri
      width={size || 100}
      height={size || 100}
      fill={color || colors.light}
      uri={icon}
    />
  )
}