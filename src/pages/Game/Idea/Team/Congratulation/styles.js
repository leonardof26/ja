import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Image = styled.Image`
    margin-top: 50px;
`;

export const Title = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: ${colors.background};
    text-transform: uppercase;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    color: #615B5B;
    text-align: center;
`;

export const TitleCard = styled.Text`
    font-size:16px;
    color: ${colors.secundary};
    margin-bottom: 10px;
    margin-top: 50px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size:14px;
    color: #615B5B;
    padding: 0 40px;
`;

export const ContainerUser = styled.View`
    width: 100%;
    margin-top: 55px;
`;