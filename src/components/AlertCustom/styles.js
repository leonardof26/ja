import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Container = styled.View`
    height: 48px;
    width: 100%;
    position: absolute;
    top: 35px;
    left:0;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const Text = styled.Text`
    font-size:14px;
    font-weight: bold;
`;