const React = require('react');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function SearchBookPage({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />
      <h1>Book Finder</h1>
      <section className='container'>
        <form method='POST' action='/search' className='findbook'>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3>Название книги</h3></label>
            <input name="name" type="text" className='form-control' id="exampleInput" required autoComplete='off' />
          </div>

          <button type="submit" className="btn btn-primary">Найти</button>
        </form>
      </section>
      <div className='booklist'>
        <h2 className='text-text'>Результат поиска</h2>
      </div>
      <script defer src="/js/searchbook.js" />
      
    </Layout>
  );
};