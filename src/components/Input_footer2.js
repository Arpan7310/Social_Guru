import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Input_footer2 = (props) => {
  const [newMessage, setNewMessage] = useState();
  const [empid, setEmpid] = useState("");
  const [clied, setClied] = useState("");
  const [messageList, setMessageList] = useState([]);

  let userid = localStorage.getItem("email_Employee");
  let clid = localStorage.getItem("email_client");
  useEffect(() => {
    axios
      .get(`http://52.3.252.238:4000/employee/find/?email=${userid}`)
      .then((response) => {
        console.log(response);
        setEmpid(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // just for now

  useEffect(() => {
    axios
      .get(`http://52.3.252.238:4000/client/find/?email=${clid}`)
      .then((response) => {
        console.log(response);
        setClied(response.data.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      let messageData = {
        from: clied,
        to: empid,
        message: newMessage,
        roomId: empid.toString() + clied.toString(),
        timestamp: new Date().toISOString(),
      };

      props.socket.emit("newMessage", messageData);

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

export default Input_footer2;
