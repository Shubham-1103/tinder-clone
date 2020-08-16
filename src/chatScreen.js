import React, { useState } from "react";
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Bill",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
      message: "Whats up 🖤?",
    },
    {
      name: "Bill",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hey bill! 😊",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH BILL ON 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__sendButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
