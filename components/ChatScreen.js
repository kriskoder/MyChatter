import React from "react";
import { View, Button, Text } from "react-native";
import GeneralContainerView from "./Utils/GeneralContainerView";

const ChatScreen = () => {
  return (
    <GeneralContainerView>
      <Text>ChatScreen</Text>
      <Button title="Click the button" />
    </GeneralContainerView>
  );
};

export default ChatScreen;
