import React from 'react';
import { useDispatch } from 'react-redux';
import { modifyDate, isDateFresh } from '../../helpers/date';
import { deleteUserPlanAC } from '../../redux/actionCreators/plansAC';
import s from './Plan.module.css'

function Plan({ plan, setEditModal }) {
  const dispatch = useDispatch();

  return (
    <div className={s['plan']}>
      <p>Планирую:</p>
      <p>{plan.title}</p>

      <p>Описание:</p>
      <p>{plan.description}</p>

      <p>Дата:</p>
      <p style={isDateFresh(plan.date)}>{modifyDate(plan.date)}</p>

      <div className={s['buttons-container']}>
      <input className={s['update-button']} type="button" value="Изменить" onClick={() => setEditModal(plan.id)} />
      <input className={s['done-button']} type="button" value="Завершить" onClick={() => dispatch(deleteUserPlanAC(plan.id))} />
      </div>
      
    </div>
  );
}

export default Plan;
