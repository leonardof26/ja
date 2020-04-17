import React from 'react';
import LottieView from 'lottie-react-native';
import { colors } from '@/styles/index.js';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native'

const Loading = () => (
    <View style={{
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: 0,
        backgroundColor: colors.white,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 200
    }}>
        <LottieView source={require('@assets/animations/startup.json')} autoPlay loop />
        <Text style={{
            fontSize: 22,
            textTransform: 'uppercase',
            fontWeight: 'bold'
        }}>
            Carregando...
        </Text>
    </View>
)

export default Loading;