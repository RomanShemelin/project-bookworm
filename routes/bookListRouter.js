const router = require('express').Router();
const BookList = require('../views/BookList.jsx');
const { Book } = require('../db/models');

router.get('/', async (req, res) => {
  const books = await Book.findAll();
   console.log(books)
  res.renderComponent(BookList, { books });
});

module.exports = router;
