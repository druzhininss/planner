import React from 'react';

function Registration(props) {
  return (
    <form>
      <input name="username" type="text" placeholder="Введите имя пользователя" />
      <input name="email" type="email" placeholder="Введите адрес электронной почты" />
      <input name="password" type="password" placeholder="Введите пароль" />
      <input name="password" type="password" placeholder="Повторите пароль" />
      <input type="button" value="Отправить" />
    </form>
  );
}

export default Registration;
