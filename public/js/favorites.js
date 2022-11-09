const arr = document.querySelectorAll('.btn-favorite');
arr.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    const btnName = event.target.name;
    const book = event.target.closest('.card');
    event.preventDefault();
    const res = await fetch(`/favorite/${btnName}`, {
      method: 'DELETE',
    });
    const deleteCard = await res.json();
    if (deleteCard.message === true) {
      book.remove();
    }
  });
});
