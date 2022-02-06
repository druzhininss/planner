const createForm = document.getElementById('createForm');
const createError = document.getElementById('createError');

createForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    title,
    price,
    action,
    method,
  } = event.target;

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      price: price.value,
    }),
  });

  const responseJSON = await response.json();

  if (responseJSON.create) {
    createError.textContent = 'Карточка создана. Страница перезагрузится автоматически';
    createError.style.color = 'green';
    // alert('Карточка успешно создана');

    setTimeout(() => {
      window.location.href = responseJSON.redirectPage;
    }, 2000);

    // window.location.href = responseJSON.redirectPage;
  } else {
    createError.textContent = 'Что-то пошло не так...';
    // window.location.reload();
  }
});
