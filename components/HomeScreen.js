import React from "react";
import { Text, Button } from "react-native";
import BasicViewWrapper from "./wrappers/BasicViewWrapper";

export const HomeScreen = ({ navigation }) => {
  return (
    <BasicViewWrapper>
      <Text>Home Screnn</Text>
      <Button
        title="Go to chat"
        onPress={() => {
          navigation.navigate("ChatScreen");
        }}
      />
    </BasicViewWrapper>
  );
};

export default HomeScreen;
