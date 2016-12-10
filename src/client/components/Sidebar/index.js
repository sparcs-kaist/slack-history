import React from 'react';
import styles from './Sidebar.scss'

function Sidebar(props) {
  console.log(styles)
  return (
    <div className={styles.sidebar}></div>
  );
}

export default Sidebar;