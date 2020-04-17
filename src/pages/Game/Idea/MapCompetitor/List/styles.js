import styled from 'styled-components/native';
import { colors } from '@/styles';

export const BlockHeader = styled.View`
    padding: 25px 32px 11px;
    background-color: ${colors.background};
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const Figure = styled.View`
    width: 10%;
`;

export const BlockText = styled.View`
    width: 90%;
`;

export const TitleBlock = styled.Text`
    font-size: 14px;
    color: ${colors.white};
`;

export const SubtitleBlock = styled.Text`
    font-size: 10px;
    color: rgba(255,255,255,0.7);
`;

export const Circle = styled.View`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background-color: ${colors.white};
`;

export const CircleText = styled.Text`
    font-size: 14px;
    color: ${colors.primary}
    text-transform: uppercase;
    text-align: center;
`;

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

export const ContainerModal = styled.View`
    flex: 1;
`;
export const HeaderModal = styled.ImageBackground`
    height: 100px;
`;

export const BodyModal = styled.View`
    padding: 0 36px;
    height: 100%;
    flex: 1;
`;


export const TitleModal = styled.Text`
    font-size: 20px;
    color: ${colors.white};
    padding: 0 24px;
    font-weight: bold;
`;


export const Col = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    flex-direction: row;
    padding: 0 32px 50px;
`;

export const Fieldset = styled.View``;

export const TitleFieldset = styled.Text`
    font-size: 16px;
    color: ${colors.secundary};
    text-transform: uppercase;
    margin-bottom: 13px;
    font-weight: bold;
    margin-top: 20px;
`;

export const Group = styled.View`
`;

export const Description = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    width: 100%;
    text-align: right;
`;

export const Label = styled.Text`
    font-size: 14px;
    color: ${colors.dark};
    margin-bottom: 15px;
    margin-top: 16px;
`;

export const GroupRadio = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

export const Radio = styled.TouchableOpacity`
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: ${colors.dark}
    justify-content: center;
    margin-left: 15px;
    align-items: center;
`;
export const RadioText = styled.Text`
    font-size: 10px;
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: bold;
`;

export const BlockCompetitor = styled.View`
    padding: 17px 21px;
    background-color: ${colors.lighter};
    width: 100%;
    margin-top: 16px;
    border-radius: 5px;
`;

export const TitleCompetitor = styled.Text`
    color: ${colors.secundary};
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 6px;
`;

export const DescriptionCompetitor = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    margin-bottom: 16px;
`;

export const RowCompetitor = styled.View`
    flex-direction: row;
    margin-bottom: 15px;
`;

export const LabelLevel = styled.Text`
    font-size: 14px;
    color: ${colors.dark};
    flex: 1;
`;

export const BlockLevel = styled.View`
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: ${colors.dark};
    justify-content: center;
    align-items: center;
`;

export const BlockLevelText = styled.Text`
    color: ${colors.white};
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
`;