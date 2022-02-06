const cardEditForm = document.getElementById('cardEditForm');
const cardEditError = document.getElementById('cardEditError');
const profileCards = document.getElementById('product-list-container');

cardEditForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    title,
    price,
    action,
  } = event.target;

  const response = await fetch(action, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.value,
      price: price.value,
    }),
  });

  const responseJSON = await response.json();

  if (responseJSON.message) {
    cardEditError.innerText = 'Карточка успешно обновлена';
    cardEditError.style.color = 'green';

    setTimeout(() => {
      window.location.href = responseJSON.redirectPage;
    }, 2000);
  }
});

profileCards?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const cardId = event.target.dataset.delbtn_id;
    const response = await fetch(`/card/edit/deleteCard/${cardId}`, {
      method: 'DELETE',
    });

    window.alert('Карточка удалена');
    window.location.reload();
  }
});
