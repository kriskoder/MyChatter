import React from "react";
import ChatViewWrapper from "../wrappers/ChatViewWrapper";
import BasicViewWrapper from "../wrappers/BasicViewWrapper";
import Message from "./Message";




const ChatContainer = () => {
  return (
    <BasicViewWrapper>
      <ChatViewWrapper>
        <Message type="incoming" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum, nisl id maximus sagittis, lacus augue cursus sapien, nec hendrerit ligula enim eu leo. "/>
        <Message type="outgoing" content="volutpat condimentum. Etiam nec "/>
        <Message type="incoming" content="hasellus eu enim id quam consectetur molestie sed eget ligula. Morbi dapibus semper lectus ac fermentum. Vestibulum ultricies viverra arcu, nec condimentum velit maximus nec. Quisque lobortis justo tortor, vitae faucibus ex commodo a. Curabitur sit amet ligula volutpat, lobortis felis pharetra, "/>
        <Message type="outgoing" content=" ac odio placerat venenatis."/>
      </ChatViewWrapper>
    </BasicViewWrapper>
  );
};
  
export default ChatContainer;
