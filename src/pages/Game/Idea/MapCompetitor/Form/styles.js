import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Block = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Circle = styled.View`
    width: 32px;
    height: 32px;
    border-radius: 32px;
    background: ${colors.primary};
    justify-content: center;
    align-items: center;
`;

export const CircleText = styled.Text`
    text-transform: uppercase;
    font-size: 16px;
    color: ${colors.white};
`;

export const TextDescription = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    width: 100%;
    text-align: right;
`;

export const Col = styled.View``;