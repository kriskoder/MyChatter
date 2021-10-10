import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ type }) => {
  const styleClass = { ...styles.container, ...styles[type] };

  return (
    <View style={styleClass}>
      <Text>mock message text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
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
