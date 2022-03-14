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
      <Link to='/'><img className={s.logo} src="img/planner_logo.png" alt="planner logo" /></Link>
      {/* <Link to='/' className="">Center</Link> */}
      <div className={s['auth-block']}>
        {
          user?.login
            ?
            <>
            <span className={s['auth-text-span']}><i>Время вершить великие планы, {user?.username}!</i></span>
            <span className={s['auth-span']}><Link className={s['nav-logout-btn']} to='/' onClick={() => dispatch(logoutAC())}>Выйти</Link></span>
            </>
            :
            <>
              <span className={s['auth-span']}><Link className={s['nav-login-buttons']} to='/registration'>Регистрация</Link></span>
              <span className={s['auth-span']}><Link className={s['nav-login-buttons']} to='/login'>Войти</Link></span>
            </>
        }

      </div>
    </nav>
  );
}

export default Nav;
