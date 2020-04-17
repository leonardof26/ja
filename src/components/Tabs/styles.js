import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const Navbar = styled.View`
    background-color: ${colors.dark};
    padding: 15px 0 30px;
    flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    width: 36px;
    height: 36px;
    border-radius: 36px;
    justify-content: center;
    align-items: center;
`;