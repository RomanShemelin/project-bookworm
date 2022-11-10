const React = require('react');

module.exports = function Header({ user }) {
  return (
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

          </>
        )}
    </ul>
  );
};
