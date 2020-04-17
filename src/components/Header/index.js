import React from 'react';
import {
  Header,
  Title,
  SubTitle
} from './styles';


export default ({ title, subtitle, image }) => (
  <Header source={image}>
    <Title>{title}</Title>
    {subtitle && <SubTitle>{subtitle}</SubTitle>}
  </Header>
)