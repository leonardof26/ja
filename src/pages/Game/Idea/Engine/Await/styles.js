import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.View`
    flex: 1
    background-color: #fff;
`;

export const ScrollView = styled.ScrollView``;

export const Footer = styled.View`
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
`;

export const FooterText = styled.Text`
    font-weight: bold;
    font-size: 14px;
`;

export const Check = styled.View`
    width: 32px;
    height: 32px;
    background-color: ${colors.background};
    justify-content: center;
    align-items: center;
    border-radius: 32px;
`;