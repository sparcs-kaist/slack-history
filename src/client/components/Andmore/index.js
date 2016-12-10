import React from 'react';
import styles from './Andmore.scss';

function Andmore({ onClick }) {
  return (
    <div className={styles.andmore}>
      <button onClick={ onClick }>And More</button>
    </div>
  )
}

export default Andmore;