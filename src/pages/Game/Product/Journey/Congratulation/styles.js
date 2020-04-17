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

export const BlockText = styled.View`
    margin-bottom: 30px;
    width: 100%;
`;

export const TitleTextBlock = styled.Text`
    color: ${colors.secundary};
    font-size:16px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export const TextBlock = styled.Text`
    font-size:16px;
    line-height: 20px;
    color: ${colors.dark}
`;

export const BlockContainer = styled.View`
    width: 100%;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;