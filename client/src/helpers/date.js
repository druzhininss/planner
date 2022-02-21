export const modifyDate = (date) => {
  const modifiedDate = date.split('-').reverse().join(' / ');
  return modifiedDate;
};

export const isDateFresh = (date) => {
  const today = (new Date()).toLocaleDateString('ru-RU');
  const comparisonDate = (new Date(date)).toLocaleDateString('ru-RU');

  if (today > comparisonDate) {
    return { color: 'red' }
  } else if (today === comparisonDate) {
    return { color: 'orange' }
  } else {
    return { color: 'green' }
  };
};
