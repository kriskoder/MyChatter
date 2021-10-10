import React from "react";
import ChatViewWrapper from "../wrappers/ChatViewWrapper";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import Message from "./Message";

const ChatContainer = () => {
  return (
    <BasicViewWrapper>
      <ChatViewWrapper>
        <Message type="incoming" />
        <Message type="outgoing" />
        <Message type="incoming" />
        <Message type="outgoing" />
      </ChatViewWrapper>
    </BasicViewWrapper>
  );
};
  
export default ChatContainer;
