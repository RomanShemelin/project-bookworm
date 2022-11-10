const React = require('react');
const Header = require('./Header');
const Layout = require('./Layout');

module.exports = function SearchBookPage({ title, user }) {
  return (
    <Layout title={title}>
      <Header user={user} />      
      <section className='container'>
      <p className='form-label'>Book Finder</p>
        <form method='POST' action='/search' className='findbook'>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label"><h3></h3></label>
            <input name="name" type="text" className='form-control' id="exampleInput" required autoComplete='off' placeholder='Введите название книги или темы для поиска' />
          </div>
          <button type="submit" className="btn btn-primary">Найти</button>
        </form>
        <div className='booklist search_div'>
        <p className='text-text'>Результат поиска</p>
      </div>
      <script defer src="/js/searchbook.js" />
      </section>  

    </Layout>
  );
};