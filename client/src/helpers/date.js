export const modifyDate = (date) => {
  const modifiedDate = (new Date(date)).toLocaleDateString();
  return modifiedDate;
};

export const isDateFresh = (date) => {
  const newDate = new Date()
    .toLocaleDateString(undefined, { dateStyle: 'short' })
    .split('.')
    .reverse()
    .join('-');
  const today = Date.parse(newDate);
  const comparisonDate = Date.parse(date);

  if (today > comparisonDate) {
    return { color: 'red' }
  } else if (today === comparisonDate) {
    return { color: 'orange' }
  } else {
    return { color: 'green' }
  };
};
