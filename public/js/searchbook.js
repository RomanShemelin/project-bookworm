const form = document.querySelector('.findbook');
const bookList = document.querySelector('.booklist');
console.log(form);
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name } = event.target;
  console.log(name.value);
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name.value}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.items.length; i++) {
        bookList.innerHTML += `<div  class="card" style="width: 18rem;">
     <img src=${data.items[i].volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="your book" />
     <div class="card-body">
       <h4 class="card-title">Название:${data.items[i].volumeInfo.title}</h4>
       <h4 class="card-title">Авторы:${data.items[i].volumeInfo.authors}</h4>
       <h4 class="card-title">Дата публикации:${data.items[i].volumeInfo.publishedDate}</h4>
       <a href=${data.items[i].volumeInfo.previewLink} type='button' class='btn btn-warning'>Подробнее</a>
     </div>`;
      }
    });
});
