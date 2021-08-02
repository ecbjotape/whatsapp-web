import React from 'react';
import './ChatListItem.css';

export default () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="assets/pp.jpg" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name"> Monteiro </div>
          <div className="chatlistItem--date"> 19:42 </div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--LastMsg">
            <p>Deixa eu ser sua putinha?</p>
          </div>
        </div>
      </div>
    </div>
  );
}