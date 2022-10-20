import React from "react";
import DetailView from "./DetailView";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/RouteController";

type iProps = StackScreenProps<RootStackParamList, "Details">;

const DetailController = ({ navigation, route }: iProps) => {
  const { itemID, info } = route.params;
  return <DetailView navigation={navigation} itemID={itemID} info={info} />;
};

export default DetailController;
