const router = require('express').Router();
const Commentar = require('../views/Comment.jsx');
const { Book, Comment } = require('../db/models');
const CommentCard = require('../views/CommentCard.jsx');

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  const bookt = Number(req.params.id);
  const book = await Book.findOne({ where: { id: bookt } });
  const comments = await Comment.findAll({ where: { bookId: bookt } });
  res.renderComponent(Commentar, { comments, user, book });
});

router.post('/:id', async (req, res) => {
  const { user } = res.locals;
  // console.log(user)
  const { commentText } = req.body;
  const { id } = req.params;
  try {
    const comment = await Comment.create({ comment: commentText, bookId: Number(id), userId: user.id });
    console.log(comment, '+++++++++');
    res.renderComponent(CommentCard, { comment, user }, { doctype: false });

  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { user } = res.locals;
  console.log(id, user);
  if (!user) {
    res.status(404);
  }
  const data = await Comment.destroy({ where: { id: Number(id), userId: Number(user.id) } });
  res.json({ data });
});

module.exports = router;
