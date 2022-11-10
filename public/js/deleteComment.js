const deleteComment = document.querySelector('.commentlist');

deleteComment.addEventListener('click', async (e) => {

  if (!e.target.classList.contains('commentButton')) {
    return;
  }
  const parent = e.target.closest('.cardComment');
  const { id } = parent.dataset;
  const res = await fetch(`/comments/${id}`, {
    method: 'delete',
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    parent.remove();
  }
});
