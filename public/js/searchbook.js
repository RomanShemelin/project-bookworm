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
     <img src=${data.items[i].volumeInfo.imageLinks === undefined ? '' : data.items[i].volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="your book" />
     <div class="card-body">
     <div className='card-content'>
     <p className="card-title">Название</p>
     <p class="card-title2">${data.items[i].volumeInfo.title}<p>
     <p className="card-title">Автор</p>
     <p class="card-title2">${data.items[i].volumeInfo.authors}</p>
     <p class="card-title">Дата публикации:${data.items[i].volumeInfo.publishedDate}</p>
     </div>
 
       <a href=${data.items[i].volumeInfo.previewLink} type='button' class='btn btn-warning'>Подробнее</a>
     </div>`;
      }
      event.target.reset();
    });
});
