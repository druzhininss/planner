const editForm = document.getElementById('editForm');

editForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    action,
    username,
    email,
  } = event.target;

  const response = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
    }),
  });

  const responseJSON = await response.json();
  alert(`Данные успешно изменены, ${username.value}!`);
  window.location.href = responseJSON.redirect;
});
