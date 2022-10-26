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
import MyPositionController from "../Screens/MyPosition/MyPositionController";
import Colors from "../Styles/Colors";
import { useManageNotification } from "../Services/Notification/useManageNotification";

export type RootDrawerParamList = {
  Main: undefined;
  MyPositionDrawer: undefined;  
};

export type RootStackParamList = {
  Home: undefined;
  Details: { itemID: number; info: string };
  MyPosition: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

let screenOptions: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.HeaderBackgroundColor,
  },
  headerTintColor: Colors.HeaderTintColor,
};

export const StackHome = () => {
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

const RouteController = () => {    
    useManageNotification();

    let drawerNavigation: DrawerNavigationOptions = {
      headerShown: false,
      drawerActiveTintColor: Colors.HeaderTintColor,
      drawerInactiveTintColor: Colors.NeutralMedium,
      drawerStyle: {
        backgroundColor: Colors.HeaderBackgroundColor,
        width: 240,
      },
    };

    const StackMyPosition = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="MyPosition"
            component={MyPositionController}
            options={{ ...screenOptions, title: "Minha Posição" }}
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
            name="MyPositionDrawer"
            component={StackMyPosition}
            options={{ drawerLabel: "Minha Posição", headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default registerRootComponent(RouteController);
