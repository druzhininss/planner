import React from 'react';
import { modifyDate, isDateFresh } from '../../helpers/date';
import s from './Plan.module.css'

function Plan({ plan, setEditModal }) {
  
  return (
    <div className={s['plan']}>
      <p>Title:</p>
      <p>{plan.title}</p>

      <p>Description:</p>
      <p>{plan.description}</p>

      <p>Date:</p>
      <p style={isDateFresh(plan.date)}>{modifyDate(plan.date)}</p>
      
      <input type="button" value="Edit" onClick={() => setEditModal(plan.id)} />
      <input type="button" value="Done" />
    </div>
  );
}

export default Plan;
