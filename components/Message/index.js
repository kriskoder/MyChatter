import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Message = ({ type, date, content }) => {
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
    marginVertical: 7,
    maxWidth: "80%",
    marginHorizontal: '5%'
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
