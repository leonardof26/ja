import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Footer = styled.ImageBackground`
    position: absolute;
    width: 100%;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

export const ButtonSecondary = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    background-color: ${colors.primary}
    justify-content: center;
    align-items: center;
`;

export const Col = styled.View`
    flex: 1;
`;

export const Bar = styled.View`
    background-color: ${colors.white};
    padding: 0 32px;
    justify-content: center;
    align-items: center;
    height: 40px;
    flex-direction: row;
`;