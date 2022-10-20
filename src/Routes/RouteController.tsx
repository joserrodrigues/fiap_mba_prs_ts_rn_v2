import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";

import HomeController from "../Screens/Home/HomeController";
import DetailController from "../Screens/Detail/DetailController";

export type RootStackParamList = {
  Home: undefined;
  Details: { itemID: number; info: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const RouteController = () => {
    const StackHome = () => {
        return (
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={HomeController}
            options={{ title: "Lista", headerShown: false }}
            />
            <Stack.Screen
            name="Details"
            component={DetailController}
            options={{ title: "Detalhe" }}
            />
        </Stack.Navigator>
        );
    };

    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={StackHome} />
            <Drawer.Screen
            name="Notifications"
            component={DetailController}
            />
        </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default registerRootComponent(RouteController);
