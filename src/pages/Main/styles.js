import styled from 'styled-components/native';
import { colors } from '@/styles';

export const StyledContainer = styled.ImageBackground`
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.background};
  flex: 1;
  padding: 0 20px 90px;
`;

export const ProgressBar = styled.View`
  width: 100%;
  height: 6px;
  backgroundColor: rgba(0,0,0,0.5);
  border-radius: 30px;
  overflow: hidden;
`;

export const Bar = styled.View`
  height: 100%;
  background: ${colors.dark};
`;

export const TextProgress = styled.Text`
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: bold;
`;