import React from 'react';
import {
    StyledContainer,
    ScrollView,
    Title,
    Subtitle,
    Image,
    Container
} from './styles'

import FooterButton from '@/components/FooterButton'
import Robot from '@assets/images/robo.png'
import { Alert } from 'react-native';

const Transition = ({ navigation, route: { params } }) => {
    return (
        <StyledContainer>
            <ScrollView
                contentContainerStyle={{
                    minHeight: '100%'
                }}
            >
                <Container>
                    <Image source={Robot} />
                    <Title>AGORA VAMOS VOTAR{'\n'}NAS IDEIAS?</Title>
                    <Subtitle>Escolha até 3 ideias para votar</Subtitle>
                </Container>
            </ScrollView>
            <FooterButton
                onPress={() => navigation.navigate('Vote', { ideas: params.ideas })}
                onBack={() => {
                    Alert.alert('Alerta', 'Todos os usuários já cadastraram uma idéia');
                }}
            />
        </StyledContainer>
    )
}

export default Transition;