import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Alert } from 'react-native';

import Journey from './Journey';
// import Team from './Team';
// import Problem from './Problem';
// import Solution from './Solution';
// import Client from './Client';
// import MapMarket from './MapMarket';
// import MapCompetitor from './MapCompetitor';

const Stack = createStackNavigator();

function routeInitial(step, nav) {
  switch (step) {
    case 0:
      return false;
    // case 1:
    //   return 'Team'
    // case 2:
    //   return 'Problem'
    // case 3:
    //   return 'Solution'
    // case 4:
    //   return 'Client'
    // case 5:
    //   return 'MapMarket'
    // case 6:
    //   return 'MapCompetitor'
  }
}

const Idea = ({ navigation }) => {
  const game = navigation.getParam('game');
  const setGame = navigation.getParam('setGame');

  if (game.forms.idea.verify === 7) {
    Alert.alert('Finalizada', 'Essa etapa foi finalizada');
    return navigation.navigate('Home')
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={
          routeInitial(game.forms.idea.verify)
        }
      >
        <Stack.Screen
          name="Journey"
          component={Journey}
          initialParams={{
            mainNavigation: navigation
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Idea;