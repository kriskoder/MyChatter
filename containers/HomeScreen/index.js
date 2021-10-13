import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import ChatTile from "../../components/ChatTile";

import BasicViewWrapper from "../../components/HOC/BasicViewWrapper";
import { mockUsersData } from "../../data/users";
import chatMockData from "../../data/chatMockData";

const ChatsView = ({ navigation }) => {
  function lastMessageData(userId) {
    const chatMessages = chatMockData.find((chatItem) => {
      return chatItem.userId === userId;
    }).messages;

    const lastChatMessage = chatMessages[chatMessages.length - 1];
    return lastChatMessage;
  }

  function lastMessageDate(userId) {
    const lastMessageDate = lastMessageData(userId).date;
  }

  function navigateToChatScreen() {
    navigation.navigate("ChatScreen");
  }

  return (
    <BasicViewWrapper>
      <ScrollView style={styles.chatsPanel}>
        {mockUsersData.map(({ userAvatar, userName }) => (
          <TouchableOpacity key={userName} onPress={navigateToChatScreen}>
            <ChatTile userAvatar={userAvatar} userName={userName} />
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
});

export default ChatsView;
