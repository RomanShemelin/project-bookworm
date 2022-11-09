const router = require('express').Router();
const { Book } = require('../db/models');
const EditBook = require('../views/EditBook.jsx');

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  const bookId = Number(req.params.id);
  const book = await Book.findOne({ where: { id: bookId } });
  res.renderComponent(EditBook, { user, book });
});

module.exports = router;
