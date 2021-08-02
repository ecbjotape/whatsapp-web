import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem.js';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
//1:11:28
export default () => {

  const [chatList, setChatList] = useState([{}]);

  return (
    <div className="app-window">
      <div className="sideBar">
        <header>
          <img className="header--avatar" src="https://img-premium.flaticon.com/png/512/4140/premium/4140037.png?token=exp=1627941961~hmac=86cc1fef9bac4e2fa0fa14422faf287a" alt="Avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon />
            </div>
            <div className="header--btn">
              <ChatIcon />
            </div>
            <div className="header--btn">
              <MoreVertIcon />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input" >
            <SearchIcon fontSize="small" style={{ color: `#919191` }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="contentArea">
        ...
      </div>
      ...
    </div >
  )
}