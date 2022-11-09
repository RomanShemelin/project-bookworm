const router = require('express').Router();
const { Book, User, Comment } = require('../db/models');
const Private = require('../views/Private.jsx');
const BookCard = require('../views/BookCard.jsx');
const EditBook = require('../views/EditBook.jsx');

router.route('/')
  .get(async (req, res) => {
    const { user } = res.locals;
    const allbooks = await Book.findAll({ where: { userId: user.id } });
    const books = allbooks.sort((a, b) => b.id - a.id);
    res.renderComponent(Private, { user, books });
  })
  .post(async (req, res) => {
    const { user } = res.locals;
    const {
      name, image, author, comment,
    } = req.body;
    // console.log(name, image, user.id, author, comment);
    const book = await Book.create({
      name, image, userId: user.id, author,
    });
    console.log(book);
    await Comment.create({ comment, userId: user.id, bookId: book.id });
    res.renderComponent(BookCard, { user, book }, { doctype: false });
  });
router.route('/:id')
  .get(async (req, res) => {
    const { user } = res.locals;
    const bookId = Number(req.params.id);
    const book = await Book.findOne({ where: { id: bookId } });
    res.renderComponent(EditBook, { user, book });
  })
  .delete(async (req, res) => {
    const { user } = res.locals;
    const { id } = req.params;
    try {
      if (!user) {
        return res.status(404);
      }
      await Book.destroy({ where: { id, userId: user.id } });
      res.json({ message: true });
    } catch (err) {
      return res.status(500).json({ status: 'error', message: `${err.message}` });
    }
  })
  .put(async (req, res) => {
    const { user } = res.locals;
    const {
      name, image, author, comment,
    } = req.body;
    // console.log(req.body);
    const id = Number(req.body.id);
    const book = await Book.findOne({ where: { id } });
    const newcomment = await Comment.findOne({ where: { userId: user.id, bookId: id } });
    try {
      if (!user) {
        return res.status(404);
      }
      if (user.id !== Number(book.userId)) {
        return res.status(404);
      }
      if (book.name === name && book.image === image && book.author === author && newcomment.comment === comment) {
        return res.status(404).json({ status: 'error', message: 'Ничего не изменилось' });
      }
      if (!name || !image || !author || !comment) {
        return res.status(404).json({ status: 'error', message: 'Поля нужно заполнить' });
      }
      book.name = name;
      book.image = image;
      book.author = author;
      book.userId = user.id;
      book.save();

      newcomment.comment = comment;
      newcomment.save();
      return res.status(200).json({ status: 'success', message: 'Изменения сохранены' });
    } catch (err) {
      return res.status(500).json({ status: 'error', message: `${err.message}` });
    }
  });

module.exports = router;
