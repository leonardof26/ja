import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Main from '@/pages/Main';
import Login from '@/pages/Login';
import Introduction from '@/pages/Introduction';

import MyDrawer from '@/components/Drawer';
import Tabs from '@/components/Tabs';


import HowWorking from '@/pages/Game/HowWorking';
import HowCreatedStartup from '@/pages/Game/HowCreatedStartup';
import Idea from '@/pages/Game/Idea';
import Product from '@/pages/Game/Product';


const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Tabs,
    contentComponent: MyDrawer,
    drawerWidth: 300
  }
}, {
  initialRouteName: 'Home'
});


const MainNavigator = createStackNavigator({

  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Introduction: {
    screen: Introduction,
    navigationOptions: {
      header: null
    }
  },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  },

  // Routes Game
  HowWorking: {
    screen: HowWorking,
    navigationOptions: {
      header: null
    }
  },
  HowCreatedStartup: {
    screen: HowCreatedStartup,
    navigationOptions: {
      header: null
    }
  },
  Idea: {
    screen: Idea,
    navigationOptions: {
      header: null
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      header: null
    }
  }

},
  {
    initialRouteName: 'Main',
    navigationOptions: ({ navigation }) => ({
      title: 'ReactNavigation',
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    })
  }
);

const Routes = createAppContainer(MainNavigator)

export default Routes;
