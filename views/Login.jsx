const React = require('react');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <Header />
      <>

        {/* <form id="login" method="POST" action="/auth/login"> */}
        <div className="login">
          <h1>Login</h1>
          <form id="login" method="POST" action="/auth/login">
            <input type="text" name="email" placeholder="Username" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <button type="submit" className="btn btn-primary btn-block btn-large">Войти</button>
          </form>
        </div>
        <script defer src="/js/login.js" />
      </>



    </Layout >
  );
};
