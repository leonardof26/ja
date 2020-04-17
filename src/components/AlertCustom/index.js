import React from 'react';
import {
    Container,
    Text
} from './styles'
import { colors } from '@/styles';

export default ({ message, color, background }) => (
    <Container style={{ backgroundColor: background || colors.dark }}>
        <Text style={{ color: color || colors.white }}>{message}</Text>
    </Container>
)