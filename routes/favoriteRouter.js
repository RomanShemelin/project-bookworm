const router = require('express').Router();
const Favorites = require('../views/Favorites.jsx');
const { Favorite, Book } = require('../db/models');

router.get('/', async (req, res) => {
  const { user } = res.locals;
  const favoriteBooks = await Favorite.findAll({ where: { userId: user.id }, raw: true });

  const booklist = await Promise.all(
    favoriteBooks.map(async (el) => await Book.findOne({ where: { id: el.bookId }, raw: true })),
  );
  res.renderComponent(Favorites, {
    title: 'My favorites',
    user,
    books: booklist,
  }, { doctype: false });
});

module.exports = router;
