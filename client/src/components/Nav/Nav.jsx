import React from 'react';
import { Link } from 'react-router-dom';
import s from './Nav.module.css';

function Nav(props) {
  return (
    <nav className={s['nav-container']}>
      <Link to='/' className="">Home</Link>
      <Link to='/' className="">Center</Link>
      <div className={s['auth-block']}>
        <span className={s['auth-span']}><Link to='/registration' className="">Registration</Link></span>
        <span className={s['auth-span']}><Link to='/login' className="">Login</Link></span>
        <span className={s['auth-span']}><Link to='/logout' className="">Logout</Link></span>
      </div>
    </nav>
  );
}

export default Nav;
