const router = require('express').Router();
const Commentar = require('../views/Comment.jsx');
const { Book, Comment } = require('../db/models');
const CommentCard = require('../views/CommentCard.jsx');

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  const bookt = Number(req.params.id);
  const book = await Book.findOne({ where: { id: bookt } });
  const comments = await Comment.findAll({ where: { bookId: bookt } });
  console.log('poiuytrde=====================');
  res.renderComponent(Commentar, { comments, user, book });
});

router.post('/:id', async (req, res) => {
  const { user } = res.locals;

  const { commentText } = req.body;
  const { id } = req.params;

  const comment = await Comment.create({ comment: commentText, bookId: Number(id), userId: user.id });
  res.renderComponent(CommentCard, { comment }, { doctype: false });
});

module.exports = router;
