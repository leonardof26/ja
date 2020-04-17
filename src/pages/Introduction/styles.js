import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Image = styled.Image`
    margin-bottom: 30px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.white};
    margin-bottom: 30px;
    text-align: center;
`;

export const Text = styled.Text`
    text-align: center;
    color: ${colors.white};
    justify-content: center;
    font-size: 16px;
`;

export const Body = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const BodyClear = styled.View`
    flex: 1;
    width: 100%;
`;

export const Footer = styled.View`
    padding-bottom: 30;
    justify-content: center;
    align-items:center;
`;