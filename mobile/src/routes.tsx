import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Tabs from "./tabs";
import Register from "./pages/Register";

const RootStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Home" component={Tabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
