import React from "react";
import "./header.css";
import PersonIcon from "@material-ui/icons/Person"; /* Icons are basically fonts so we can set the properties like fontSize and all*/
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton"; //it is kind of wrapper to the icons that provide button functionality to icons
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

/*
This is functional component 
basically a function that retuns some jsx(html with some javascript used inside it)
*/
function Header({backButton}) {
  // gives us session History if you go forward or backward
  const history = useHistory();
  return (
    // BEM
    <div className="header">
      {/*if we got the property of back icon button render that else person icon */}
      {backButton ? (
        <IconButton onClick = {()=>history.replace(backButton)}> 
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
