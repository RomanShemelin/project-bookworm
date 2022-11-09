const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');
const BookList = require('./BookList');


module.exports = function Private({ user, books }) {
  return (
    <Layout>
      <Header user={user} />
      <section  className='container'>
        <form method='POST' action='/book' className='addbook'>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3>Название книги</h3></label>
            <input name="name" type="text" className='form-control' id="exampleInput" required autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3>Автор</h3></label>
            <input name="author" type="text" className='form-control' id="exampleInput" required autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3>Добавить фото обложки</h3></label>
            <input name="image" type="text" className='form-control' id="exampleInput" required placeholder='добавьте url обложки' autoComplete='off' />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3>Комментарий по книге</h3></label>
            <input name="comment" type="text" className='form-control' id="exampleInput" required autoComplete='off' />
          </div>
          <button type="submit" className="btn btn-primary">Сохранить</button>
        </form>
      </section>
      <div className="cardList">
        {user && (<BookList books={books} user={user} />)}
      </div>
      <script defer src="/js/addbook.js" />
      <script defer src="/js/deletebook.js" />

    </Layout>
  );
};