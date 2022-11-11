const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function Registration({ title }) {
  return (
    <Layout title={title}>
      <Header />
      <div className="login">
        <h1>Registration</h1>
        <form id="registration" method="POST" action="/auth/registration">
          <input type="text" name="user" placeholder="Username" required="required" autoComplete="off" />
          <input type="email" name="email" placeholder="Email" required="required" autoComplete="off" />
          <input type="password" name="password" placeholder="Password" required="required" minLength='8' />
          <input type="password" name="checkpassword" placeholder="Confirm Password" required="required"  />
          <button type="submit" className="btn btn-primary btn-block btn-large btn-login">Зарегистрироваться</button>
        </form>
      </div>
      <section id="error" />
      <script defer src="/js/registration.js" />
    </Layout>
  );
};
