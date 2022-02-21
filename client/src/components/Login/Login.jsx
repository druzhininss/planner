import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearMessageAC, userLoginAC } from '../../redux/actionCreators/userAC';
import s from './Login.module.css';

function Login(props) {
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const { user } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(clearMessageAC());
  }, [dispatch]);

  const getUserData = () => {
    return {
      email: email.current.value,
      password: password.current.value,
    }
  }

  return (
    <div>

      <form className={s['login-form']} onSubmit={(event) => {
        event.preventDefault();
        dispatch(userLoginAC(getUserData()));
      }}>

        <label>Адрес электронной почты:</label>
        <input className={s['text-input']} ref={email} type="email" placeholder="Введите адрес электронной почты" />

        <label>Пароль:</label>
        <input className={s['text-input']} ref={password} type="password" placeholder="Введите пароль" />

        <input className={s['submit-button']} type="submit" value="Отправить" />

        {
          user?.message
            ?
            <p style={{ fontSize: '0.7rem', color: 'red' }}>{user.message}</p>
            :
            user?.login && <Redirect to='/' />
        }

      </form>

    </div>
  );
}

export default Login;
