import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import { mockUsersData } from "../../data/users";

const ChatsView = () => {
  return (
    <BasicViewWrapper>
      <ScrollView style={styles.chatsPanel}>
        {mockUsersData.map((userItem) => (
          <TouchableOpacity key={userItem.userId}>
            <View style={styles.itemContainer}>
              <Image style={styles.userAvatar} source={userItem.userAvatar} />
              <View style={styles.chatDetailsContainer}>
                <View style={styles.chatDetailsHeader}>
                  <Text>{userItem.userName}</Text>
                  <Text>21:12</Text>
                </View>
                <Text style={styles.chatDetailsMessage}>Last message....</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </BasicViewWrapper>
  );
};

const styles = StyleSheet.create({
  chatsPanel: {
    paddingHorizontal: 15,
  },
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
  chatDetailsMessage: {},
});

export default ChatsView;
