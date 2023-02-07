import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "./Chat.css"
import { store } from "../..";
import Axios from "../../Utils/Axios";

function Chat() {

  const { value } = store.getState().Auth;
  const {userId}  = store.getState().userId;
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const {http} = Axios(); 
  const [currentRoom, setCurrentRoom] = useState("");

  const joinRoom = (room) => {
    if (username !== "" && room !== "" && currentRoom !== room) {
      socket.emit("join_room", room);
      setCurrentRoom(room)
    }
  };
  const socket = io.connect("http://192.168.0.117:3002");
  // const socket = io.connect("http://localhost:3002");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");

    }
  };

  function getUser() {
    http.get(`/user/${userId}`).then((response) => {
          setUsername(response.data.nome);
        });
}

  useEffect(() => {
    getUser()
  }, [])
  useEffect(() => {
    socket.on("receive_message", (data) => {
      if(data.author !== username) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

  return (
    <div>
        
        <div className="chat">
        <div className="chat-window">
        <div className="chat-header">
            <button className="butt" onClick={() => {setRoom(1); joinRoom(1)}}>Sala 1</button>
            <button className="butt" onClick={() => {setRoom(2); joinRoom()}}>Sala 2</button>
            <button className="butt" onClick={() => {setRoom(3); joinRoom()}}>Sala 3</button>
        </div>
        <div className="chat-body">
            <ScrollToBottom className="message-container">
            {messageList.map((messageContent) => {
                return (
                <div
                    className="message"
                    id={username === messageContent.author ? "you" : "other"}
                >
                    <div>
                    <div className="message-content">
                        <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">  
                        <p id="time">{messageContent.time}</p>
                        <p id="author">{messageContent.author}</p>
                    </div>
                    </div>
                </div>
                );
            })}
            </ScrollToBottom>
        </div>
        <div className="chat-footer">
            <input
            type="text"
            value={currentMessage}
            placeholder="Hey..."
            onChange={(event) => {
                setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
            }}
            />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Chat;