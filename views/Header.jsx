const React = require('react');

module.exports = function Header({ user }) {
  return (
    <ul className="nav">
      {user
        ? (
          <>
            <nav class="navbar navbar-dark bg-dark">
              <div class="container-fluid">

                <li className="nav-item">
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/notes">Мои заметки</a>
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
            <nav class="navbar navbar-dark bg-dark">
              <div class="container-fluid">

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
