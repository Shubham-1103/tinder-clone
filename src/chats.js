import React from "react";
import Chat from "./chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Bill"
        message="Yo wasup ? ❣️"
        timestamp="40 seconds ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg"
      />
      <Chat
        name="brad"
        message=" Hey how are you ? 😊"
        timestamp="1 minute ago"
        profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/10/02/brad-pitt-4.jpg"
      />
    </div>
  );
}

export default Chats;
