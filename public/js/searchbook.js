const form = document.querySelector('.findbook');
const bookList = document.querySelector('.booklist');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  bookList.innerHTML = '';
  const { name } = event.target;
  console.log(name.value);
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name.value}&maxResults=20`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        bookList.innerHTML += `<div  class="card" style="width: 18rem;">
     <img src=${data.items[i].volumeInfo.imageLinks === undefined ? '' : data.items[i].volumeInfo.imageLinks.thumbnail} class="card-img-top" alt="your book" />
     <div class="card-body">
     <div class='card-content'>
     <p class="card-title3">Название</p>
     <p class="card-title4">${data.items[i].volumeInfo.title}<p>
     <p class="card-title3">Автор</p>
     <p class="card-title4">${data.items[i].volumeInfo.authors}</p>
     <p class="card-title5">Дата публикации: ${data.items[i].volumeInfo.publishedDate}</p>
     </div>
 
       <a href=${data.items[i].volumeInfo.previewLink} type='button' class='btn btn-more'>Подробнее</a>
     </div>`;
      }
      event.target.reset();
    });
});
