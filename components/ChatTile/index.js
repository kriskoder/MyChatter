import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ChatTile = ({ userAvatar, userName }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.userAvatar} source={userAvatar} />
      <View style={styles.chatDetailsContainer}>
        <View style={styles.chatDetailsHeader}>
          <Text>{userName}</Text>
          <Text>2 hours ago</Text>
        </View>
        <Text numberOfLines={1}>Lorem Ipsum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  userAvatar: {
    flex: 1,
    maxWidth: 50,
    aspectRatio: 1,
    borderRadius: 25,
  },
  chatDetailsContainer: {
    justifyContent: "space-between",
    flex: 4,
    paddingLeft: 20,
  },
  chatDetailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ChatTile;
