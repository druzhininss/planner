import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  updateUserPlansAC } from '../../redux/actionCreators/plansAC';
import s from './ModalEditPlans.module.css';
import { modifyDate } from '../../helpers/date';

function Modal({ setEditModal, planId }) {
  const dispatch = useDispatch();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const planData = useSelector(state => {
    const { plans } = state.plansReducer;
    const thisPlan = plans.filter(plan => plan.id === planId);
    return thisPlan[0];
  })

  const [error, setError] = useState('');

  const getPlanData = () => {
    return {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      planId: planData.id,
    }
  };

  const sendValidData = () => {
    // 1. validate title and date
    // 2. close modal if ok, or show error
    // 3. allow enter in description field

    const data = getPlanData();
    const { title, date } = data;
    if (!title || !date) {
      setError('Заполните поля Title и Дата');
    } else {
      setError('');
      dispatch(updateUserPlansAC(data));
      setEditModal(false);
    }
  };



  return (

    <div className={s['modal']}>
      <div className={s['modal-content']}>

        <span className={s['close']} onClick={() => setEditModal(false)}>&times;</span>

        <h3>Изменить планы?</h3>

        <form className={s['add-plans-form']}
          onSubmit={(event) => {
            event.preventDefault();
            sendValidData();
          }}>

          <label>Title:</label>
          <input ref={title} className={s['text-input']} type="text" placeholder={planData.title} />

          <label>Description:</label>
          <input ref={description} className={s['text-input']} type="text" placeholder={planData.description} />

          <label>Prev date:</label>
          <input className={s['text-input']} type="text" placeholder={modifyDate(planData.date)} disabled />

          <label>New date:</label>
          <input ref={date} className={s['text-input']} type="date" />
          <input className={s['submit-button']} type="submit" value="Изменить" />

          {
            error && <p style={{ fontSize: '0.7rem', color: 'red' }}>{error}</p>
          }

        </form>

      </div>
    </div>

  );
}

export default Modal;