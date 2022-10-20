import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";

import HomeController from "../Screens/Home/HomeController";
import DetailController from "../Screens/Detail/DetailController";
import Colors from "../Styles/Colors";

export type RootDrawerParamList = {
  Main: undefined;
  Notifications: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { itemID: number; info: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const RouteController = () => {
    let screenOptions:StackNavigationOptions = {
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.HeaderBackgroundColor,
      },
      headerTintColor: Colors.HeaderTintColor,
    };

    let drawerNavigation: DrawerNavigationOptions = {
      headerShown: false,
      drawerActiveTintColor: Colors.HeaderTintColor,
      drawerInactiveTintColor: Colors.NeutralMedium,
      drawerStyle: {
        backgroundColor: Colors.HeaderBackgroundColor,
        width: 240,
      },
    };

    const StackHome = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeController}
            options={screenOptions}
          />
          <Stack.Screen
            name="Details"
            component={DetailController}
            options={screenOptions}
          />
        </Stack.Navigator>
      );
    };

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen
            name="Main"
            component={StackHome}
            options={{ drawerLabel: "Main", ...drawerNavigation }}
          />
          <Drawer.Screen
            name="Notifications"
            component={DetailController}
            options={{ drawerLabel: "Detail", ...drawerNavigation }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default registerRootComponent(RouteController);
