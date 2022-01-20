import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../components/Header.module.css'


const Header = () => {
  return <header className={styles.Header}>
     <nav className='container'>
      <NavLink to="/" end> Home </NavLink>
      <NavLink to="login" > cadastrar-se </NavLink>
     </nav>
  </header>;
};

export default Header;
