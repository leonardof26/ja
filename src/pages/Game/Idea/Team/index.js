import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Await from './Await';
import Congratulation from './Congratulation';
import Positions from './Positions';
import Introduction from './Introduction';

const Stack = createStackNavigator();

const Team = ({ navigation, route: { params: { mainNavigation } }, ...props }) => {
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName="Introduction"
        headerMode="none"
      >
        <Stack.Screen name="Introduction" initialParams={{ mainNavigation }} component={Introduction} />
        <Stack.Screen name="Await" component={Await} />
        <Stack.Screen name="Positions" component={Positions} />
        <Stack.Screen name="Congratulation" initialParams={{ mainNavigation, parentNavigation: navigation }} component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Team;