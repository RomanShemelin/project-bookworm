const React = require('react');

module.exports = function FavoriteBookCard({ user, book }) {
  return (
    <div id={book.id} className="card" style={{ width: "18rem" }}>
      <img src={book.image} className="card-img-top" alt="your book" />
      <div className="card-body">
        <h4 className="card-title">Название</h4>
        <h4 className="card-title2">{book.name}</h4>
        <h4 className="card-title">Автор</h4>
        <h4 className="card-title2">{book.author}</h4>
        {/* <p class="card-text">{newcomment.comment}</p> */}
        {user && (<button type="button" name={book.id} className="btn btn-danger btn-favorite">Удалить</button>)}
      </div>
    </div>
  )
};