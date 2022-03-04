import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAC } from '../../redux/actionCreators/userAC';
import s from './Nav.module.css';

function Nav(props) {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.userReducer);

  return (
    <nav className={s['nav-container']}>
      <Link to='/' className="">Home</Link>
      {/* <Link to='/' className="">Center</Link> */}
      <div className={s['auth-block']}>
        {
          user?.login
            ?
            <span className={s['auth-span']}><Link to='/' onClick={() => dispatch(logoutAC())}>Выйти</Link></span>
            :
            <>
              <span className={s['auth-span']}><Link to='/registration'>Регистрация</Link></span>
              <span className={s['auth-span']}><Link to='/login'>Войти</Link></span>
            </>
        }

      </div>
    </nav>
  );
}

export default Nav;
