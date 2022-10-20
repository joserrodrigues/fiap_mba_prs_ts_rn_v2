import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Image } from "react-native-elements";
import Colors from "../../Styles/Colors";

export const MainContainer = styled.View`
  flex: 1;
`;

export const TopScreen = styled.View`
  flex: 5;
`;

export const BottomScreen = styled.View`
  flex: 5;
`;

export const TitlePage = styled.Text`
  margin: 20px;
  font-size: 30px;
  text-align: center;
  color: ${Colors.PrimaryDark};
`;

export const StyledImage = styled(Image).attrs({
  containerStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
})``;

export const TextBoxContainer = styled.View`
  flex-grow: 1;
`;

export const TextBlock = styled.View`
  flex: 1;
  margin: 15px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${Colors.PrimaryDark};
  padding: 20px;
`;

export const BottomButton = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-evenly;
`;
