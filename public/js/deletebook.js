const deleteform = document.querySelector('.cardList');
console.log(deleteform);
deleteform.addEventListener('click', async (event) => {
  const isDeleteBtn = event.target.classList.contains('btn-danger');
  if (!isDeleteBtn) {
    return; // остановить работу если это не кнопка удаления
  }
  const book = event.target.closest('.card');
  const { id } = book;
  const response = await fetch(`/book/${id}`, {
    method: 'DELETE',
  });
  const deleteCard = await response.json();
  console.log(deleteCard.message);
  if (deleteCard.message === true) {
    book.remove();
  }
});

deleteform.addEventListener('click', async (event) => {
  const isFavoriteBtn = event.target.classList.contains('btn-favorite');
  console.log(isFavoriteBtn);
  if (!isFavoriteBtn) {
    return; // остановить работу если это не кнопка удаления
  }
  const book = event.target.closest('.card');
  const { id } = book;
  console.log(id);
  const response = await fetch(`/favorite/addbook/${id}`, {
    method: 'GET',
  });
  const data = await response.json();
  if (data.message === true) {
    alert('Книга добавлена в раздел избранное');
  }
});
