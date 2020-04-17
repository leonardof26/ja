import styled from 'styled-components/native';
import { colors } from '@/styles';

export const Button = styled.TouchableWithoutFeedback``;

export const Text = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: rgba(16, 33, 33, 0.5);
    text-transform: uppercase;
    padding-left: 12px;
    margin-top: 5px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    flex: 1;
`;

export const Col = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
`
export const Content = styled.View`
    background-color: ${colors.lighter};
    padding: 24px 16px;
    border-radius: 5px;
    flex: 1;
`;

export const FormContainer = styled.View`
    padding-left: 40
`;