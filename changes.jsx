const Layout = require("./views/Layout");

<Styles className="css">
.header-container {
  display: flex;
  justify-content: space-around;
  background-color: #212529
}

.title-container {
  display: flex;
  align-items: center;
}

.title-text {
  display: flex;
  flex-direction: column;
  color: #2358CA
}

.main {
  font-size: 50px;
  font-family: 'Qwitcher Grypen', cursive;
}

.second {
  font-size: 46px;
  font-family: 'Qwitcher Grypen', cursive;
}

.logo {
  margin-right: 10rem;
  width: 50px;
  height: 50px;
}

</Styles>

Header(module.exports = function Header({ user }) {
  return (
    // <div className="header-container">
    //   <div className='title-container'>
    //     <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3145/3145792.png' title='asd'/>
    //     <div className='title-text'>
    //     <span className='main'>BookWorm</span>
    //     <span className='second'>Professional Book Site.</span>
    //     </div>
    //   </div>
    <ul className="nav">
      {user
        ? (
          <>
           <div className="header-container">
      <div className='title-container'>
        <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3145/3145792.png' title='asd'/>
        <div className='title-text'>
        <span className='main'>BookWorm</span>
        <span className='second'>Professional Book Site.</span>
        </div>
      </div>
      </div>
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
              <div className="header-container">
      <div className='title-container'>
        <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3145/3145792.png' title='asd'/>
        <div className='title-text'>
        <span className='main'>BookWorm</span>
        <span className='second'>Professional Book Site.</span>
        </div>
      </div>
      </div>
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
    // </div>
  );
};
)

Layout(module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link href="/css/style.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@1&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
        <title>{title}</title>
      </head>
      <body>
      {/* <Header user={user} /> */}
        {children}
        <div className="footer">
          <footer>
            <div className='footerFirst'>Все о книгах онлайн.</div>
            <div className="heroLinks">
            <a className="hero_link" href="tlgg.ru/ivanich44">
              <i className='ivan bxl-telegram'></i>
              <a className="hero_link" href="tlgg.ru/ivanich44">
              <i className='roman bxl-telegram'></i>
              <a className="hero_link" href="tlgg.ru/ivanich44">
              <i className='anna bxl-telegram'></i>
              <a className="hero_link" href="tlgg.ru/ivanich44">
              <i className='masha bxl-telegram'></i>
              <a className="hero_link" href="tlgg.ru/ivanich44">
              <i className='andrey bxl-telegram'></i>
            </div>
          </footer>
        </div>
      </body>
    </html >
  );
};
)


