import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import getTheme from "../../constants/colors";
const colors = getTheme();

const ChatTile = ({ userAvatar, userName }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.userAvatar} source={userAvatar} />
      <View style={styles.chatDetailsContainer}>
        <View style={styles.chatDetailsHeader}>
          <Text style={styles.chatTileText}>{userName}</Text>
          <Text style={styles.chatTileText}>2 hours ago</Text>
        </View>
        <Text numberOfLines={1} style={styles.chatTileMessageText}>Lorem Ipsum</Text>
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
  chatTileText: {
    fontSize:  16,
    color: colors.chatListTextColor
  },
  chatTileMessageText: {
    color: colors.chatListTextColor
  }
});

export default ChatTile;
