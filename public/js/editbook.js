const changeform = document.querySelector('.changeInfo');
console.log(changeform);
const infoDiv = document.querySelector('.errChange');
console.log(infoDiv);
changeform.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    name, image, author, comment, id,
  } = event.target;
  // console.log(name.value, image.value, id);
  const response = await fetch(`/book/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      image: image.value,
      id,
      author: author.value,
      comment: comment.value,
    }),
  });
  const data = await response.json();
  console.log(data);
  if (data.status === 'error') {
    infoDiv.innerHTML = data.message;
  }
  if (data.status === 'success') {
    alert(data.message);
    window.location.assign('/book');
  }
});
