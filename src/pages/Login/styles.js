import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.ImageBackground`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  padding: 100px 0 30px;
  background-color: ${colors.background}
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${colors.light};
  margin-bottom: 33px;
  font-weight: bold;
`;


export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 35px;
`;


export const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`

export const Link = styled.Text`
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${colors.white};
  font-size:16px;
  color: ${colors.white};
  margin-top: 15px;
`

export const Footer = styled.ImageBackground`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 45px;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  padding: 12px 80px;
  border-radius: 30px;
`;
export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size:16px;
  font-weight: bold;
  text-transform: uppercase;
`;