import React from 'react';
import styles from './Message.scss';

function MessageProfile() {
  return (
    <div className={styles.messageProfile}>
      <div 
        className={styles.messageThumbnail}
        style={ {backgroundImage: "https://avatars.slack-edge.com/2014-03-06/2201385998_48.jpg"} }
      >
      </div>
    </div>
  )
}

function MessageContent({ message }) {
  return (
    <div className={styles.messageContent}>
      <header className={styles.messageHeader}>
        
      </header>
      <span className={styles.messageText}>{ message.text }</span>
    </div>
  )
}
// <span>{ message.member.name }</span>

function Message({ isNew, message }) {
  if (isNew) {
    var profileElem = <MessageProfile member={ message.member }/>
  }
  return (
    <div className={styles.message}>
      <MessageContent
        isNew={ isNew }
        message={ message }
      />
    </div>
  );
}

export default Message;