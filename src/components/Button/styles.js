import styled from 'styled-components/native';
import { colors } from '@/styles';

export const ButtonCustom = styled.TouchableOpacity`
    background: ${colors.primary};
    border-radius: 30px;
    max-width: 250px;
`;
export const TextButton = styled.Text`
    color: ${colors.white};
    font-size:16px;
    font-weight: bold;
    text-transform: uppercase;
`;