const React = require('react');
const BookList = require('./BookList');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function Main({ title, user, books }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      {user && <BookList books={books} user={user} />}

    </Layout>
  );
};
