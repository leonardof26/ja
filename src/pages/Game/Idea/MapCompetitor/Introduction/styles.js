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
    width: 100%;
    text-align: center;
`;

export const Footer = styled.ImageBackground`
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-bottom: 68px;
`;

export const Col = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: ${colors.dark};
    line-height: 21px;
    text-align: left;
    margin-bottom: 3px;
    margin-top: 15px;
`

export const Bold = styled.Text`
    font-weight: bold;
`;

export const BlockText = styled.View`
    margin-top: 30px;
    width: 100%;
`;

export const Title2 = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.secundary};
    margin-top: 15px;
    text-align: left;
    text-transform: uppercase;
`;

export const Block = styled.View`
    background-color: ${colors.secundary};
    padding: 17px 21px 30px;
    width: 100%;
    margin-top: 15px;
`;

export const TitleLight = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 10px;
`;

export const BlockContainer = styled.View`
`;

export const ContentText = styled.View`
    flex-direction: row;
`;