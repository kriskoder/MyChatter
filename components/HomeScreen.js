import React from "react";
import { Text, Button } from "react-native";
import BasicViewWrapper from "./wrappers/BasicViewWrapper";
import chatMockData from "../data/chatMockData"

export const HomeScreen = ({ navigation }) => {
  return (
    <BasicViewWrapper>
      <Text>Home Screen</Text>
      <Button
        title="Go to chat"
        onPress={() => {
          navigation.navigate("ChatScreen", {
            chatData: chatMockData,
          });
        }}
      />
    </BasicViewWrapper>
  );
};

export default HomeScreen;
