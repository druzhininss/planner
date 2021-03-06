import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Plan from '../Plan/Plan';
import s from './PlanList.module.css'

function PlansList({ plans, setEditModal }) {
  return (
    <div className={s['plans-container']}>
      {plans && plans.map(plan => <Plan plan={plan} setEditModal={setEditModal} key={uuidv4()} />)}
    </div>
  );
}

export default PlansList;
