import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Content = styled.View`
    padding: 33px 36px;
    flex: 1
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const Col = styled.View``;

export const FormContainer = styled.View``;

export const ContentFigure = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    background-color: #DCDCDC;
    justify-content: center;
    align-items: center;
`;

export const Figure = styled.Image``;

export const Text = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    width: 100%;
    text-align: right;
`;

export const Tab = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const TabText = styled.Text`
    color: rgba(16, 33, 36, 0.5);
    font-size: 10px;
    text-transform: uppercase;
`;

export const TabTextActive = styled.Text`
    color: ${colors.secundary};
    fontSize: 20px;
`;

export const TabButton = styled.TouchableOpacity`
    padding: 0 20px;
`;