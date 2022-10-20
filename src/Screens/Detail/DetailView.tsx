import React from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";
import { StyledButton } from "../../Styles/ButtonStyle";

type iProps = {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  itemID: number;
  info: string;
};
const DetailView = ({ navigation, itemID, info }: iProps) => {
  let { name, email } = JSON.parse(info);
  return (
    <>
      <Text>{itemID}</Text>
      <Text>Name = {name}</Text>
      <Text>Email = {email}</Text>
      <StyledButton title="Próximo" onPress={() => navigation.goBack()} />
    </>
  );
};

export default DetailView;
