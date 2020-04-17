import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${colors.background}
`;

export const ScrollView = styled.ScrollView``;

export const Image = styled.Image`
    margin-bottom: 62px;
`;

export const Title = styled.Text`
    font-size:18px;
    color: ${colors.white};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align:center;
`;

export const Subtitle = styled.Text`
    font-size:12px;
    color: ${colors.white}
`;

export const Container = styled.View`
    flex: 1;
    padding: 35px 32px;
    justify-content: center;
    align-items: center;
`;