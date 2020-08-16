import React from "react";
import "./App.css";
import Header from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./tinderCards";
import SwipeButtons from "./swipeButtons";
import Chats from "./chats";
import ChatScreen from "./chatScreen";

//react-router-dom will basically allow us to have several diferent pagaes.
// always keep default routs at the bottom as js runs sequentially so
// if you want to go to the /chats and you put / at the top then router will
// not work becasue it will stop at / and will not go to /chat so we need to put it in bottom

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /**/
}
{
  /*We have header*/
}
{
  /*We have Cards or Images*/
}
{
  /*Buttons below cards*/
}
{
  /*Chat screen*/
}
{
  /*Individual chat screen*/
}
