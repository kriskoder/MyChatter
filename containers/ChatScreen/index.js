import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";

import ChatViewWrapper from "../../components/HOC/ChatViewWrapper";
import BasicViewWrapper from "../../components/HOC/BasicViewWrapper";
import Message from "../../components/Message";
import ChatHeaderIcons from "../../components/ChatHeaderIcons";
import SendMessageContainer from "../../components/ChatInput";

import chatMockData from "../../data/chatMockData";

const ChatContainer = ({ navigation }) => {
  chatData = chatMockData[0];

  useEffect(() => {
    navigation.setOptions({
      title: chatData.userName,
      headerRight: () => <ChatHeaderIcons />,
    });
  }, []);

  return (
    <BasicViewWrapper>
      <ChatViewWrapper>
        <ScrollView>
          {chatData.messages.map((messageItem) => {
            return (
              <Message
                key={messageItem.id}
                type={messageItem.type}
                date={messageItem.date}
                content={messageItem.content}
              />
            );
          })}
        </ScrollView>
      </ChatViewWrapper>
      <SendMessageContainer />
    </BasicViewWrapper>
  );
};

export default ChatContainer;
