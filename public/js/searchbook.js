const form = document.querySelector('.findbook');
const bookList = document.querySelector('.booklist');
console.log(form);
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { name } = event.target;
  console.log(name.value);
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name.value}`)
    .then((res) => res.json())
    .then((data) => console.log(data.items));
});

{ /* <div  className="card" style={{ width: "18rem" }}>
<img src=${book.image} className="card-img-top" alt="your book" />
<div className="card-body">
  <h4 className="card-title">Название:${book.name}</h4>
  <h4 className="card-title">Автор:${book.author}</h4>
</div>
</div> */ }
