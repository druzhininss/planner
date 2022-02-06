import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAC } from '../../redux/actionCreators/userAC';
import s from './Nav.module.css';

function Nav(props) {
  const dispatch = useDispatch();
  return (
    <nav className={s['nav-container']}>
      <Link to='/' className="">Home</Link>
      <Link to='/' className="">Center</Link>
      <div className={s['auth-block']}>
        <span className={s['auth-span']}><Link to='/registration' >Registration</Link></span>
        <span className={s['auth-span']}><Link to='/login' >Login</Link></span>
        <span className={s['auth-span']}><Link to='/' onClick={() => dispatch(logoutAC())}>Logout</Link></span>
      </div>
    </nav>
  );
}

export default Nav;
