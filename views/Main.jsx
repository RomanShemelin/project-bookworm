const React = require('react');
const BookList = require('./BookList');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function Main({ title, user, books }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <div className='bookList'>
      {user && <BookList books={books} user={user} />}
      <script src='/js/addtofavorite.js'></script>
      <script src='/js/deletebookMainPage.js'></script>
      </div>
    </Layout>
  );
};
