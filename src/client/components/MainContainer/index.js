import React from 'react';
import styles from './MainContainer.scss';

function MainContainer({ children }) {
  console.log(styles);
  return (
    <div className={ styles.mainContainer }>{ children }</div>
  );
}

export default MainContainer;