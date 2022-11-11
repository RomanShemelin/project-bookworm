const React = require('react');

module.exports = function FavoriteBookCard({ user, book }) {
  return (
    <div id={book.id} className="card" style={{ width: "18rem" }}>
      <div>
      <img src={book.image} className="card-img-top" alt="your book" />
      </div>
      <div className="card-body">
        <div className='card-content'>
        <p className="card-title">Название</p>
        <p className="card-title2">{book.name}</p>
        <p className="card-title">Автор</p>
        <p className="card-title2">{book.author}</p>
        </div>

        {/* <p class="card-text">{newcomment.comment}</p> */}
      </div>
      {user && (<button type="button" name={book.id} className="btn btn-danger btn-favorite">Удалить</button>)}
    </div>
  )
};  