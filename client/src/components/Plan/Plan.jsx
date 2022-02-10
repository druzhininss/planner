import React from 'react';

function Plan({ plan }) {
  const modifyDate = (date) => {
    const dateArray = date.split('-');
    const year = dateArray.shift();
    dateArray.push(year);
    const modifiedDate = dateArray.join(' / ');

    return modifiedDate;
  };

  return (
    <div>
      <p>{plan.title}</p>
      <p>{plan.description}</p>
      <p>{modifyDate(plan.date)}</p>
      <input type="button" value="Edit" />
      <input type="button" value="Done" />
    </div>
  );
}

export default Plan;
