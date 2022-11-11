const router = require('express').Router();
const Main = require('../views/Main.jsx');
const { Book } = require('../db/models');


router.get('/', async (req, res) => {
  const { user } = res.locals;
    const books = await Book.findAll();
   console.log(books)
  res.renderComponent(Main, { user, title: 'Bookworm', books });
});




module.exports = router;
