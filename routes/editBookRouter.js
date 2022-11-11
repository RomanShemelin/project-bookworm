const router = require('express').Router();
const { Book, Comment } = require('../db/models');
const EditBook = require('../views/EditBook.jsx');

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  // console.log(user)
  const bookId = Number(req.params.id);
  const book = await Book.findOne({ where: { id: bookId } });
  const comment = await Comment.findOne({ where: { userId: user.id, bookId } });
  res.renderComponent(EditBook, { user, book, comment });
});

module.exports = router;
