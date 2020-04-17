import React from 'react';
import { ScrollView } from 'react-native';


const ContentView = ({ children, customStyle }) => (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 18,
            alignItems: 'center',
            ...customStyle
        }}
    >
        {children}
    </ScrollView>
)
export default ContentView;