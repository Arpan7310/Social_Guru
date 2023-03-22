import React, { useState } from "react";
import "./Connect_Emp.css";
import "./Speak.css";
import ScrollToBottom from "react-scroll-to-bottom";
import Nav_Agencies from "./Nav_Agencies";
import NavBar2 from "./NavBar2";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import Input_footer from "./Input_footer";
import { format } from "timeago.js";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sms from "./Chat-Sections/Sms";
function Connect(props) {
  // Use State
  const [conversations, setConversations] = useState([]);
  const messagesEndRef = useRef(null);

  const params = useParams();
  console.log("here is parameter", params.employee);

  const client_id = localStorage.getItem("ID_client");
  console.log("The client id is ", client_id);

  let str1 = params.employee + client_id;
  console.log("The string value is ", str1);

  useEffect(() => {
    props.socket.on("connect", () => {
      console.log("Connected");

      props.socket.emit("joinRoom", str1);
    });

    props.socket.on("newMessage", (data) => {
      console.log("This is the data", data);
      setConversations((list) => [...list, data]);
    });

    props.socket.on("disconnect", () => {
      console.log("Not Connected");
      props.socket.emit("leaveRoom", str1);
    });

    return () => {
      props.socket.off("connect");
      props.socket.off("disconnect");
      props.socket.off("joinRoom");
      props.socket.off("leaveRoom");
    };
  }, []);

  console.log("See watch Acctually there in Conversations", conversations);
  useEffect(() => {
    messagesEndRef?.current.scrollIntoView();
  }, [conversations]);

  return (
    <>
      <Nav_Agencies />
      <NavBar2 />

      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {/* <input placeholder="Search For Friends" className="chatMenuInput" /> */}
            {/* <Conversations /> */}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chat">
              <div
                className="chatInfo"
                style={{
                  backgroundColor: "white",
                  "border-bottom": "1px solid #242424",
                }}
              >
                <span style={{ color: "#242424" }}></span>
                <div className="chatIcons">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1590/1590877.png"
                    alt="Camera"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1176/1176424.png"
                    alt="Video"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8793/8793799.png"
                    alt="Chat"
                  />
                </div>
              </div>
            </div>

            <div className="messages">
              <div className="chat-body">
                <Sms />
                <div className="message-container">
                  {conversations.map((msg) => {
                    console.log("The data in a map will be :", msg);
                    console.log("from", msg.content.from);
                    console.log("from here", client_id);

                    return (
                      <div
                        className="message"
                        id={
                          msg.content.from === parseInt(client_id)
                            ? "You"
                            : "other"
                        }
                      >
                        <div>
                          <div className="message-content">
                            <p>{msg.content.message}</p>
                          </div>
                          <div className="message-meta">
                            <p>{format(msg.content.timestamp)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>

            <div className="chat__footer">
              <Input_footer
                socket={props.socket}
                login={client_id}
                receiver={params.employee}
                roomId={str1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect;
