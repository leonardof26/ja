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
    width: 166px;
    height: 166px;
`;

export const Image = styled.Image``;

export const Number = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: ${colors.background};
`;

export const TitleBlock = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.background};
    padding-left: 10px;
`;

export const Progress = styled.View`
    overflow: hidden;
    border-radius: 30px;
    background-color: ${colors.lightBlue}
    border-width: 3px;
    border-color: ${colors.white}
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    elevation: 1;
    min-height: 50px;
    flex-grow: 1;
`;

export const Row = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
`;

export const BlockCol = styled.View`
    margin-top: 30px;
    width: 50%;
    padding: 0 16px;
`;

export const BlockText = styled.View`
    margin-bottom: 30px;
    width: 100%;
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