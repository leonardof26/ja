import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Container = styled.View`
    border-radius: 10px;
    background-color: ${colors.lighter};
    padding: 12px 16px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Figure = styled.Image`
    width: 48px;
    height: 48px;
`;

export const TextContent = styled.View`
    padding-left: 16px;
`;

export const Title = styled.Text`
    font-size:18px;
    color: ${colors.dark}
    font-weight: bold;
`;

export const Subtitle = styled.Text`
    font-size:16px;
    color: ${colors.secundary}
`;