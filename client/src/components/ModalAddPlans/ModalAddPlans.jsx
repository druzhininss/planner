import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPlansAC, sendUserPlansAC } from '../../redux/actionCreators/plansAC';
import s from './ModalAddPlans.module.css';

function Modal({ isOpened }) {
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const { user: { userId } } = useSelector(state => state.userReducer);

  const [error, setError] = useState('');

  const getPlanData = () => {
    return {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      userId,
    }
  };

  const sendValidData = () => {
    // 1. validate title and date
    // 2. close modal if ok, or show error
    // 3. allow enter in description field
    // TODO: Обновить стейт и показать новый план на Home (PLANS_UPLOADED)

    const data = getPlanData();
    const { title, date } = data;
    if (!title || !date) {
      setError('Заполните поля Title и Дата');
    } else {
      setError('');
      dispatch(sendUserPlansAC(data));
      isOpened(false);
    }
  };

  return (

    <div className={s['modal']}>
      <div className={s['modal-content']}>

        <span className={s['close']} onClick={() => isOpened(false)}>&times;</span>

        <h3>Появились планы?</h3>

        <form className={s['add-plans-form']}
          onSubmit={(event) => {
            event.preventDefault();

            sendValidData();
            // dispatch(getUserPlansAC(userId));
          }}>

          <label>Планирую:</label>
          <input ref={title} className={s['text-input']} type="text" />

          <label>Описание:</label>
          <input ref={description} className={s['text-input']} type="text" />

          <label>Дата:</label>
          <input ref={date} className={s['text-input']} type="date" />

          <input className={s['submit-button']} type="submit" value="Отправить" />

          {
            error && <p style={{ fontSize: '0.7rem', color: 'red' }}>{error}</p>
          }

        </form>

      </div>
    </div>

  );
}

export default Modal;
