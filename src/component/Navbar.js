import React from 'react';
import styles from './Navbar.module.css'
import logo from '../images/—Pngtree—diamond_990358.png'
import { Link } from 'react-router-dom';

const Navbar = ({Open}) => {
  return ( 
    <header  className={Open ? styles.close : styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = '/products'>Products</Link></li>
          <li><Link to = '/sass' style={{color: "#ff1493"}}>Sass</Link></li>
          <li><Link to = '/aboutus'>About Us</Link></li>
        </ul>
      </div>
      <div className={styles.logo}>
         <img  className={styles.logos} src={logo} alt = 'logo' />
      </div>
      
    </header>

   );
}
 
export default Navbar;