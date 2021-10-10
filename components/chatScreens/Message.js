import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ type, content }) => {
  const styleClass = { ...styles.container, ...styles[type] };

  return (
    <View style={styleClass}>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    maxWidth: '80%'
  },
  incoming: {
    backgroundColor: "#baefff",
    alignSelf: "flex-start",
  },
  outgoing: {
    backgroundColor: "#9ce8ff",
    alignSelf: "flex-end",
  },
});

export default Message;
