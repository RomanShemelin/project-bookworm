const commentForm = document.querySelector('.commentForm');
commentForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { method, action, commentText } = event.target;
  const res = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      commentText: commentText.value,
    }),
  });
  const comment = await res.text();
  if(comment === 'Поле комментария не должно быть пустым') {
    alert('Поле комментария не должно быть пустым')
  } else {
  const list = document.querySelector('.commentlist');
  list.insertAdjacentHTML('afterbegin', comment);
  commentForm.reset();
  }
});
