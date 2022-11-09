const React = require('react');
const BookCard = require('./BookCard');


module.exports = function BookList({ user, books }) {
  return (
    <div className='bookList'>
      {books.map((book) => <BookCard user={user} book={book} />)}
    </div>
  )
};
