const React = require('react');

module.exports = function Header({ user }) {
return (
<div className='mainBlock'>
  <div>
  <ul className="nav">
    {user
    ? (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">

          <li className="nav-item">
            <a className="nav-link" href="/">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/book">Мои книги</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/favorite">Избранное</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/search">Найти</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/signout">Выйти</a>
          </li>
        </div>
      </nav>

    </>
    )
    : (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">

          <li className="nav-item">
            <a className="nav-link" href="/">Главная</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/login">Войти</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/registration">Зарегистрироваться</a>
          </li>

        </div>
        
      </nav>
      <div className='mainPhrase'>
    <p className='phrase'>Bookworm</p>
    <p className='phrase2'>“A room without books is like a body without a soul.” — Cicero</p>
  </div>
    </>
    )}
  </ul>

  </div>  

</div>
);
};