import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import chatMockData from "../../data/chatMockData";

const ChatTile = ({ userAvatar, userName }) => {
  return (
    <TouchableOpacity>
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  userAvatar: {
    flex: 1,
    maxWidth: 60,
    aspectRatio: 1,
    borderRadius: 30,
  },
  chatDetailsContainer: {
    justifyContent: "space-between",
    flex: 4,
    paddingLeft: 10,
  },
  chatDetailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ChatTile;
