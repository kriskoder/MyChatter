import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

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
    marginHorizontal: 10
  },
  incoming: {
    backgroundColor: colors.messagePrimaryBg,
    alignSelf: "flex-start",
  },
  outgoing: {
    backgroundColor: colors.messageSecondaryBg,
    alignSelf: "flex-end",
  },
});

export default Message;
