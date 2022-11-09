const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const FavoriteBookCard = require('./FavoriteBookCard')

module.exports = function Favorites({ title, user, books }) {
    return (
      <Layout title={title}>
        <Header user={user} />
        <div className = "favoriteDiv">
            {books.map((book) => <FavoriteBookCard key = {book.id} book={book} user={user}/>)}
        </div>
      </Layout>
    );
  };

