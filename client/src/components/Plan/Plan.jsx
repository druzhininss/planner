import React from 'react';

function Plan({ plan }) {
  return (
    <div>
      <p>{plan.title}</p>
      <p>{plan.description}</p>
      <p>{plan.date}</p>
      <input type="button" value="Edit" />
      <input type="button" value="Done" />
    </div>
  );
}

export default Plan;
