import React from "react";
import { View, StyleSheet } from "react-native";

import { chatHeaderIconResources } from "../../assets";
import HeaderIconWrapper from "../HOC/InteractionIconWrapper";

const ChatHeaderIcons = () => {
  return (
    <View style={styles.container}>
      {chatHeaderIconResources.map((icon, index) => {
        return <HeaderIconWrapper key={index} resource={icon} />;
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 22,
    width: 100,
    justifyContent: "space-between",
    marginRight: 10,
  },
});
export default ChatHeaderIcons;
