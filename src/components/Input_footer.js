import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Input_footer = (props) => {
  const [newMessage, setNewMessage] = useState();
  const [messageList, setMessageList] = useState([]);

  let sender = props.login;
  let customer = props.receiver;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      let messageData = {
        from: parseInt(sender),
        to: parseInt(customer),
        message: newMessage,
        roomId: props.roomId,
        timestamp: new Date().toISOString(),
      };

      props.socket.emit("newMessage", messageData);
      console.log(messageData);

      setMessageList((list) => [...list, messageData]);

      setNewMessage("");
    }
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="sendBtn" onClick={(e) => handleSubmit(e)}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Input_footer;
