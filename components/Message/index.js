import React from "react";
import { View, Text, StyleSheet } from "react-native";

import getTheme from '../../constants/colors'
const colors = getTheme();

const Message = ({ type, date, content }) => {
  const styleClass = { ...styles.container, ...styles[type] };

  return (
    <View style={styleClass}>
      <Text style={styles.chatText}>{content}</Text>
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
  chatText: {
    color: colors.chatTextColor,
    fontSize: 16,
    lineHeight: 22
    }
});

export default Message;
