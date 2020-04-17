import styled from 'styled-components/native';
import { colors } from '@/styles';


export const Block = styled.TouchableOpacity`
margin-top: 100px;
`;

export const Figure = styled.Image`
margin-bottom: 10px;
width: 166px;
height: 166px;
`;
export const Number = styled.Text`
font-size: 35px;
font-weight: bold;
color: ${colors.background};
`;
export const Title = styled.Text`
font-size: 16px;
font-weight: bold;
color: ${colors.background};
padding-left: 10px;
`;
export const Progress = styled.View`
overflow: hidden;
border-radius: 30px;
background-color: ${colors.white}
border-width: 3px;
border-color: ${colors.white}
flex-direction: row;
align-items: center;
justify-content: center;
elevation: 1;
min-height: 50px;
width: 180px;
`;
export const Bar = styled.View`
position: absolute;
height: 100%;
left: 0;
flex: 1;
right: 0;
background-color: ${colors.lightBlue}
`;