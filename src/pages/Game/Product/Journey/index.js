import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Congratulation from './Congratulation';
import Introduction from './Introduction';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Journey = ({ navigation, route: { params: { mainNavigation } }, ...props }) => {
  console.log('props Journey: ', props)
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName="Introduction"
        headerMode="none"
      >
        <Stack.Screen name="Introduction" initialParams={{ mainNavigation }} component={Introduction} />
        <Stack.Screen name="Congratulation" initialParams={{ mainNavigation, parentNavigation: navigation }} component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Journey;