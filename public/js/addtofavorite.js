const booklist = document.querySelector('.bookList');
console.log(booklist);
booklist.addEventListener('click', async (event) => {
  console.log(event.target);
  const isFavoriteBtn = event.target.classList.contains('btn-favorite');
  // console.log(isFavoriteBtn);
  if (!isFavoriteBtn) {
    return; // остановить работу если это не кнопка удаления
  }
  const book = event.target.closest('.card');
  const { id } = book;
  // console.log(id);
  const response = await fetch(`/favorite/addbook/${id}`, {
    method: 'GET',
  });
  const data = await response.json();
  if (data.message === true) {
    event.target.classList.add('btn-favorite-remove');
    event.target.classList.remove('btn-favorite-add');
  } else {
    event.target.classList.add('btn-favorite-remove');
    alert('Эта книга уже добавлена в избранное');
  }
});
