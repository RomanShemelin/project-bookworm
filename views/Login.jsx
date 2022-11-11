const React = require('react');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function Login({ title }) {
  return (
    <Layout title={title}>
      <Header />
      <>
        {/* <form id="login" method="POST" action="/auth/login"> */}
        <div className='background'>

        </div>
        <div className="login">
          <h1>Login</h1>
          <form id="login" method="POST" action="/auth/login">
            <input type="text" name="email" placeholder="Username" required="required" />
            <input type="password" name="password" placeholder="Password" required="required" />
            <button type="submit" className="btn btn-primary btn-block btn-large btn-login">Войти</button>
          </form>
          <div id='error'></div>
        </div>

        <script defer src="/js/login.js" />
      </>
    </Layout >
  );
};
