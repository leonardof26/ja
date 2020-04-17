import styled from 'styled-components/native';
import { colors } from '@/styles';

export const ScrollView = styled.ScrollView`
`;

export const StyledContainer = styled.ImageBackground`
    flex: 1;
    background-color: #fff;
`;

export const Title = styled.Text`
    font-size:18px;
    color: ${colors.background}
    text-transform: uppercase;
    margin-bottom: 24px;
    margin-top: 35px;
    font-weight: bold;
`;

export const Footer = styled.ImageBackground`
    flex-direction: row;
    background-color: #fff;
    width: 100%;
    padding-bottom: 68px;
`;

export const Col = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size:16px;
    color: ${colors.dark};
    line-height: 21px;
`