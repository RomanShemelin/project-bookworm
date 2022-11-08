const React = require('react');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function Main({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />

    </Layout>
  );
};
