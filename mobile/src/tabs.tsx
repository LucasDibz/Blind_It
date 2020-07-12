import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Jobs from './pages/JobsList';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Roboto_500Medium',
          fontSize: 16,
        },
        tabStyle: {
          backgroundColor: '#14213D',
          justifyContent: 'center',
          alignItems: 'center',
          borderRightColor: 'gray',
          borderColor: 'gray',
          borderRightWidth: 0.2,
        },
        activeTintColor: '#FCA311',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Perfil' }}
      />
      <Tab.Screen name="Jobs" component={Jobs} options={{ title: 'Vagas' }} />
      <Tab.Screen
        name="History"
        component={Home}
        options={{ title: 'Inscrições' }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
