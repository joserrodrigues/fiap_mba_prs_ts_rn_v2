import React from "react";
import HomeView from "./HomeView";
import { registerRootComponent } from "expo";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";

type iProps = StackScreenProps<RootStackParamList, "Home">;

const HomeController = ({ route, navigation }: iProps) => {
  function goNextScreen() {
    let obje = {
      name: "Nm 1",
      email: "a@a.com",
    };

    navigation.navigate("Details", {
      itemID: 184,
      info: JSON.stringify(obje),
    });
  }
  return <HomeView goNextScreen={goNextScreen} />;
};

export default HomeController;
