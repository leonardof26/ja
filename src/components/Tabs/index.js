import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import Timeline from '@/pages/Timeline';
import History from '@/pages/History';
import Chat from '@/pages/Chat';
import Home from '@/pages/Home';




import {
  Navbar,
  Button,
  Circle
} from './styles';
import { colors } from '@/styles';

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation, openDrawer, screenNavigation, game }) => {
  return (
    <Navbar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        route.params = {
          ...route.params,
          screenNavigation
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (route && route.params && route.params.menu) {
            return openDrawer()
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{
              flex: 1
            }}
          >
            <Circle
              style={{
                backgroundColor: isFocused ? colors.lightBlue : 'transparent'
              }}
            >
              <FontAwesome
                name={label}
                size={20}
                color={isFocused ? colors.dark : colors.white}
              />
            </Circle>
          </Button>
        );
      })}
    </Navbar>
  )
}


export default Tabs = ({ navigation }) => {

  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} openDrawer={navigation.openDrawer} screenNavigation={navigation} />}
      initialRouteName="rocket"
      screenOptions={{
        navigation
      }}
    >
      <Tab.Screen name="book" component={Home} />
      <Tab.Screen name="rocket" component={Timeline} />
      <Tab.Screen name="comment" component={Chat} />
      <Tab.Screen name="bars" initialParams={{ menu: true }} component={Timeline} />
      {/* <Tab.Screen name="HowWorking" component={HowWorking} /> */}
    </Tab.Navigator>
  );
}