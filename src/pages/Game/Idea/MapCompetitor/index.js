import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Congratulation from './Congratulation';
import Introduction from './Introduction';
import List from './List';
import Transition from './Transition';
import Form from './Form';

const Stack = createStackNavigator();

const MapCompetitor = ({ navigation, route: { params: { mainNavigation, parentNavigation } }, ...props }) => {
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
        <Stack.Screen name="Transition" initialParams={{ mainNavigation }} component={Transition} />
        <Stack.Screen name="List" initialParams={{ mainNavigation }} component={List} />
        <Stack.Screen name="Congratulation" initialParams={{ mainNavigation, parentNavigation: navigation }} component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MapCompetitor;