import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '@/pages/Login';
import Introduction from '@/pages/Introduction';

const Drawer = createDrawerNavigator();

export default MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Introduction" component={Introduction} />
    </Drawer.Navigator>
  );
}