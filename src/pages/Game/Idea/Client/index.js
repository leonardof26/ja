import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Congratulation from './Congratulation';
import Introduction from './Introduction';
import Form from './Form';

const Stack = createStackNavigator();

const Client = ({ navigation, route: { params: { mainNavigation, parentNavigation } }, ...props }) => {
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName="Introduction"
        headerMode="none"
      >
        <Stack.Screen name="Introduction" initialParams={{ mainNavigation }} component={Introduction} />
        <Stack.Screen name="Form" initialParams={{ mainNavigation }} component={Form} />
        <Stack.Screen name="Congratulation" initialParams={{ mainNavigation, parentNavigation: navigation }} component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Client;