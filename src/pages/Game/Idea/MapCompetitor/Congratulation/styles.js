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