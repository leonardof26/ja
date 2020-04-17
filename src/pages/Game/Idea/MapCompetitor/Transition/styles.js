import styled from 'styled-components/native';
import { colors } from '@/styles';


export const Image = styled.Image``
export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    margin: 30px 0;
    width: 100%;
    text-align: center;
`
export const Subtitle = styled.Text`
    color: ${colors.white};
    font-size: 12px;
    margin-top: 40px;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
`

export const Block = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;