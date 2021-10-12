import React, { useEffect } from "react";
import ChatViewWrapper from "../wrappers/ChatViewWrapper";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import Message from "./Message";
import { ScrollView } from "react-native-gesture-handler";
import ChatHeaderIcons from "./ChatHeaderIcons";
import SendMessageContainer from "./SendMessageComponent";

import chatMockData from "../../data/chatMockData";

const ChatContainer = ({ navigation }) => {

  useEffect(() => {
    navigation.setOptions({
      title: chatMockData.senderName,
      headerRight: () => <ChatHeaderIcons />,
    });
  }, []);

  return (
    <BasicViewWrapper>
      <ChatViewWrapper>
        <ScrollView>
          {chatMockData.messages.map((messageItem) => {
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
