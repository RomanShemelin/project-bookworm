const form = document.querySelector('.addbook');
// console.log(form);
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    name, author, image, comment, method, action,
  } = event.target;
  console.log(name, author, image, comment, method, action);
  const response = await fetch(action, {
    method,
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify({
      name: name.value,
      image: image.value,
      author: author.value,
      comment: comment.value,
    }),
  });
  const data = await response.text();
  // console.log(data);
  if (data === 'Пожалуйста заполните все поля') {
    alert('Пожалуйста заполните все поля');
  } else {
    form.reset();
    document.querySelector('.bookList').insertAdjacentHTML('afterbegin', data);
  }
});
