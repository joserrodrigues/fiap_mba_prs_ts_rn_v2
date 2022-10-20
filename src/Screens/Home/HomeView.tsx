import React from "react";

import Colors from "../../Styles/Colors";
import IPerson from "../../Interfaces/IPerson";

import {
  MainSafeAreaView,
  StyledActivityIndicator,
  TextTitle,  
} from "./HomeStyles";

type iProps = {
  dataConnection: IPerson[];
  isLoading: boolean;
  goToDetail: (item: IPerson) => void;
};

const HomeView = ({
  dataConnection,
  isLoading,
  goToDetail,
}: iProps) => {
  

  let loadingBox = null;
  if (isLoading) {
    loadingBox = (
      <StyledActivityIndicator size="large" color={Colors.PrimaryDark} />
    );
  }

  let name = ""
  if(dataConnection && dataConnection.length > 0 ){
    console.log(dataConnection);
    let info = dataConnection[0];
    name = info.firstName + " " + info.lastName;
  }
  return (
    <MainSafeAreaView>
      {loadingBox}
      <TextTitle>{name}</TextTitle>
    </MainSafeAreaView>
  );
};

export default HomeView;
