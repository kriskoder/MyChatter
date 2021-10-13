import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import ChatTile from "../../components/ChatTile";

import BasicViewWrapper from "../../components/HOC/BasicViewWrapper";
import { mockUsersData } from "../../data/users";
import chatMockData from "../../data/chatMockData";

const ChatsView = () => {
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

  return (
    <BasicViewWrapper>
      <ScrollView style={styles.chatsPanel}>
        {mockUsersData.map(({ userAvatar, userName }) => (
          <ChatTile
            key={userName}
            userAvatar={userAvatar}
            userName={userName}
          />
        ))}
      </ScrollView>
    </BasicViewWrapper>
  );
};

const styles = StyleSheet.create({
  chatsPanel: {
    paddingHorizontal: 15,
  }
});

export default ChatsView;
