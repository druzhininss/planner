import React, { useRef } from 'react';
import s from './Registration.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { userRegistrationAC } from '../../redux/actionCreators/userAC';

function Registration(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const username = useRef();
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();

  const getUserData = () => {
    return {
      username: username.current.value,
      email: email.current.value,
      password1: password1.current.value,
      password2: password2.current.value,
    }
  }

  return (
    <form className={s['registration-form']} onSubmit={(event) => {
      event.preventDefault();
      dispatch(userRegistrationAC(getUserData()));
    }}>
      <label>Имя пользователя:</label>
      <input className={s['text-input']} ref={username} type="text" placeholder="Введите имя пользователя" />
      <label>Адрес электронной почты:</label>
      <input className={s['text-input']} ref={email} type="email" placeholder="Введите адрес электронной почты" />
      <label>Пароль:</label>
      <input className={s['text-input']} ref={password1} type="password" placeholder="Введите пароль" />
      <label>Повторите пароль:</label>
      <input className={s['text-input']} ref={password2} type="password" placeholder="Повторите пароль" />
      <input className={s['submit-button']} type="submit" value="Отправить" />
      {}
    </form>
  );
}

export default Registration;
