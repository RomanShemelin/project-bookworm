const React = require('react');

module.exports = function BookCard({ user, book }) {
  return (
    <div id={book.id} className="card" style={{ width: "18rem" }}>
      <img src={book.image} className="card-img-top" alt="your book" />
      <div className="card-body">
        <h4 className="card-title">Название:{book.name}</h4>
        <h4 className="card-title">Автор:{book.author}</h4>
        {/* <p class="card-text">{newcomment.comment}</p> */}
        {user && (user.id === book.userId) && (<button type="button" className="btn btn-danger">Удалить</button>)}
        {user && (user.id === book.userId) && (<a href={`/editbook/${book.id}`} type="button" className="btn btn-warning">Изменить</a>)}
        <a href={`/comment/${book.id}`}type='button' className='btn btn-warning'>Комментарии</a>
      </div>
    </div>
  )
};