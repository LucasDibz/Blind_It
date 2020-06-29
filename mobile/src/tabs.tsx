import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: "Roboto_500Medium",
          fontSize: 16,
        },
        tabStyle: {
          backgroundColor: "#14213D",
          justifyContent: "center",
          alignItems: "center",
          borderRightColor: "gray",
          borderColor: "gray",
          borderRightWidth: 0.2,
        },
        activeTintColor: "#FCA311",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Home} />
      <Tab.Screen name="Vagas" component={Home} />
      <Tab.Screen name="Inscrições" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
