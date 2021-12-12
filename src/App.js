import React, { useState, useEffect } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem.js';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
//1:11:28
export default () => {

  const [chatList, setChatList] = useState([{}, {},{}, {},{}, {},{}, {},{}, {},{}, {}]);

  return (
    <div className="app-window">
      <div className="sideBar">
        <header>
          <img className="header--avatar" src="assets/iconAvatar.png" alt="Avatar" />
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