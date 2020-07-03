import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import JobDetail from './pages/JobDetail';
import Chat from './pages/Chat';
import Tabs from './tabs';

const RootStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="JobDetail" component={JobDetail} />
        <RootStack.Screen name="Chat" component={Chat} />
        <RootStack.Screen name="Home" component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
