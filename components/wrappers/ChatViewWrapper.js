import React from "react";
import { View, StyleSheet } from "react-native";

const ChatViewWrapper = ({ children }) => {
  return <View style={styles.chatContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  chatContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: '100%'
  },
});

export default ChatViewWrapper;
