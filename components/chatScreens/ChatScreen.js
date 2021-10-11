import React, { useEffect } from "react";
import ChatViewWrapper from "../wrappers/ChatViewWrapper";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import Message from "./Message";

import { ScrollView } from "react-native-gesture-handler";

const ChatContainer = ({ route, navigation }) => {
  const { chatMessages, senderName } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: senderName });
  }, []);

  return (
    <BasicViewWrapper>
      <ChatViewWrapper>
        <ScrollView>
          {chatMessages.map((messageItem) => {
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
    </BasicViewWrapper>
  );
};

export default ChatContainer;
