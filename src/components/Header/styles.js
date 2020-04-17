import styled from 'styled-components/native';
import { colors } from '@/styles';


import { Dimensions, Platform } from 'react-native';


function isIPhoneXSize(dim) {
    return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim) {
    return dim.height == 896 || dim.width == 896;
}

function isIphoneX() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
    );
}

export const Header = styled.ImageBackground`
    padding: ${isIphoneX() ? '35px 24px 10px' : '10px 24px'};
    justify-content: center;
`;

export const Title = styled.Text`
    text-transform: uppercase;
    color: ${colors.white};
    font-size: 20px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    color: ${colors.white};
`;