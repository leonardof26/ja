import styled from 'styled-components/native';
import { colors } from '@/styles';

export const AddIdea = styled.TouchableOpacity`
    width: 100%;
    height: 84px;
    justify-content: center;
    align-items: center;
    background: ${colors.lighter};
    flex-direction: row;
    border-radius: 10px;
`;

export const AddIdeaText = styled.Text`
    font-size: 18px;
    color: #A8A8A8;
    padding-left: 16px;
    font-weight: bold;
`;

export const ContainerIdea = styled.View`
    margin-top: 15px;
    flex: 1;
`;

export const BlockIdeia = styled.View`
    padding: 18px 18px 15px 8px;
    background: ${colors.lighter};
    border-radius: 10px;
    flex-direction: row;
    min-height: 84px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.secundary};
`;

export const Description = styled.Text`
    font-size: 12px;
    color: ${colors.dark};
`;

export const ButtonCustom = styled.TouchableOpacity``;
export const Text = styled.Text`
    font-size: 12px;
    color: ${colors.dark};
`;


export const ContainerModal = styled.View`
    flex: 1;
`;
export const HeaderModal = styled.ImageBackground``;
export const BodyModal = styled.View`
    padding: 0 36px;
    height: 100%;
    flex: 1;
`;

export const Footer = styled.View`
    flex-direction: row;
    padding: 0 32px 50px;
`;

export const Col = styled.View`
    flex: 1;
`;

export const TitleModal = styled.Text`
    font-size: 20px;
    color: ${colors.white};
    padding: 0 24px;
    font-weight: bold;
`;

export const ContainerSwipe = styled.View`
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 15px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    background-color: #FF5555;
    height: 100%;
    border-radius: 10px;
    width: 50%;
    justify-content: center;
    align-items: flex-end;
    padding-right: 30px;
`;