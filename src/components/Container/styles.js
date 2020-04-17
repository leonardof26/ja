import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.ImageBackground`
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    background-color: ${colors.background}
`;

export const StyledContainerLight = styled.ImageBackground`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.View`
    background-color: #fff;
    flex: 1;
`;

export const ScrollView = styled.ScrollView``;


export const Body = styled.View`
    flex: 1;
    padding: 100px 24px 30px;
    align-items:center;
    width: 100%;
`;

export const Footer = styled.ImageBackground``;