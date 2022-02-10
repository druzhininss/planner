import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Plan from '../Plan/Plan';

function PlansList({ plans }) {
  return (
    <div>
      {plans && plans.map(plan => <Plan key={uuidv4()} plan={plan} />)}
    </div>
  );
}

export default PlansList;
