import React from "react";
import { View as asdf, Text, Button } from "react-native";
import GeneralContainerView from "./Utils/GeneralContainerView";

export const HomeScreen = ({ navigation }) => {
  return (
    <GeneralContainerView>
      <Text>Home Screnn</Text>
      <Button
        title="Go to chat"
        onPress={() => {
          navigation.navigate("ChatScreen");
        }}
      />
    </GeneralContainerView>
  );
};

export default HomeScreen;
