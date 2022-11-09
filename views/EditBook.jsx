const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

module.exports = function EditBook({ user, book }) {
  return (
    <Layout >
      <Header user={user} />
      <form className="changeInfo" id={book.id}>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputLogin" className="form-label">Название книги </label>
            <input type="text" name="name" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" value={book.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLogin" className="form-label">Автор </label>
            <input type="text" name="author" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" value={book.author} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage" className="form-label">Фото обложки</label>
            <input type="text" name="image" className="form-control" id="exampleInputImage" value={book.image} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputImage" className="form-label">Комментарий по книге</label>
            <input type="text" name="comment" className="form-control" id="exampleInputImage" />
          </div>
          <button type="submit" className="btn btn-primary">Изменить</button>
          <div className="info-div" />
          <div className="errChange" />
        </div>
      </form>
      <script defer src="/js/editbook.js" />
    </Layout>
  );
};