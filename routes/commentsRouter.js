const router = require('express').Router();
const Commentar = require('../views/Comment.jsx');
const { User, Book, Comment } = require('../db/models');
const CommentCard = require('../views/CommentCard.jsx');

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  const bookt = Number(req.params.id);
  const book = await Book.findOne({ where: { id: bookt } });
  const Allcomments = await Comment.findAll({ where: { bookId: bookt }, include: { model: User }, raw: true });
  const comments = Allcomments.sort((a, b) => b.createdAt - a.createdAt);
  res.renderComponent(Commentar, { comments, user, book });
});

router.post('/:id', async (req, res) => {
  const { user } = res.locals;
  const { commentText } = req.body;
  const { id } = req.params;
  try {
    if (!commentText.trim()) {
      res.send('Поле комментария не должно быть пустым');
    } else {
      const comment = await Comment.create({ comment: commentText, bookId: Number(id), userId: user.id });
      res.renderComponent(CommentCard, { comment, user }, { doctype: false });
    }
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
