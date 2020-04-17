import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Image = styled.Image`
    margin-top: 50px;
`;
export const Figure = styled.Image`
    width: 72px;
    margin-right: 16px;
`;

export const Title = styled.Text`
    font-size:18px;
    font-weight: bold;
    color: ${colors.background};
    text-transform: uppercase;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    color: #615B5B;
    text-align: center;
`;

export const TitleCard = styled.Text`
    font-size:16px;
    color: ${colors.secundary};
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 3px;
`;


export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Col = styled.View`
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #615B5B;
    padding: 0;
`;

export const Block = styled.View`
    width: 100%;
    margin-top: 30px;
`;