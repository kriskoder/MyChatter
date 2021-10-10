import React from "react";
import ChatViewWrapper from "../wrappers/ChatViewWrapper";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import Message from "./Message";

import { ScrollView } from "react-native-gesture-handler";

const ChatContainer = ({ route }) => {

  const {chatData} = route.params
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
    </BasicViewWrapper>
  );
};

export default ChatContainer;
