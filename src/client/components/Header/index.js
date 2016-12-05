import React from 'react';
import styles from './Header.scss';

function Header({ channelName }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h2><span>#{ channelName }</span></h2>
      </div>
    </header>
  );
}

export default Header;