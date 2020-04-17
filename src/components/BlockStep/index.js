import React from 'react';
import {
  Block,
  Figure,
  Progress,
  Bar,
  Number,
  Title
} from './styles';

export default ({ image, number, title, progress, ...props }) => (
  <Block {...props}>
    <Figure source={image} />
    <Progress>
      <Bar style={{ width: `${progress}` }} />
      <Number>{number}</Number>
      <Title>{title}</Title>
    </Progress>
  </Block>
)