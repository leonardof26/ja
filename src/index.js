import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';

import Routes from '@/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
