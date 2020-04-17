import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from './List';
import Transition from './Transition';
import Await from './Await';
import Congratulation from './Congratulation';
import Vote from './Vote';
import Introduction from './Introduction';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Engine = ({ navigation, route: { params: { mainNavigation } }, ...props }) => {
  console.log('props Engine: ', props)
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName="Introduction"
        headerMode="none"
      >
        <Stack.Screen name="Introduction" initialParams={{ mainNavigation }} component={Introduction} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Await" component={Await} />
        <Stack.Screen name="Transition" component={Transition} />
        <Stack.Screen name="Vote" component={Vote} />
        <Stack.Screen name="Congratulation" initialParams={{ mainNavigation, parentNavigation: navigation }} component={Congratulation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Engine;