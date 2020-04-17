import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.View`
    flex: 1;
    background-color: #fff;
`;

export const ScrollView = styled.ScrollView``;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Text = styled.Text``;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${colors.white};
    text-transform: uppercase;
    text-align: center;
`;


export const Block = styled.TouchableOpacity`
    margin-top: 50px;
    width: 178px;
`;

export const TextSmall = styled.Text`
    font-size: 12px;
    color: ${colors.white};
    text-align: center;
    margin: 10px 0;
`;

export const Figure = styled.Image`
    margin-bottom: 10px;
    width: 94px;
    height: 94px;
`;

export const Image = styled.Image``;

export const Number = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.background};
`;

export const TitleBlock = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: ${colors.background};
    padding-left: 10px;
`;

export const Progress = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
    flex: 1;
`;

export const BlockCol = styled.View`
    margin-top: 30px;
    padding: 0 16px;
`;

export const BlockText = styled.View`
    margin-bottom: 30px;
    width: 100%;
`;

export const BlockTextCard = styled.View`
    background: #f8f8f8;
    border-radius: 20px;
    padding: 32px 42px;
    width: 100%;
    margin-bottom: 32px;
    justify-content: center;
    align-items: center;
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