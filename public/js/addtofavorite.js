const booklist = document.querySelector('.bookList');
console.log(booklist);
booklist.addEventListener('click', async (event) => {
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
