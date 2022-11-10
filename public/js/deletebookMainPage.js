const deleteform = document.querySelector('.bookList');
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