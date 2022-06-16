import React from 'react';
import styles from './baner.module.css'
import banere from '../images/ilya-chunin-zHdtZVze4zo-unsplash.jpg'

const baner = () => {
  return ( 
      <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1>FLOWERS</h1>
            <p>
            Rate the <span>flowers</span>
            </p>
          </div>
          <img src ={banere} alt = 'banere' />
      </div>
   );
}
 
export default baner;