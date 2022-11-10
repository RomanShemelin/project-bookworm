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

router.delete('/:bookId', async (req, res) => {
  const { user } = res.locals;
  const { bookId } = req.params;
  try {
    const result = await Favorite.destroy({ where: { userId: user.id, bookId } });
    res.json({ message: true });
  } catch (err) {
    return res.status(500).json({ status: 'error', message: `${err.message}` });
  }
});
router.get('/addbook/:bookId', async (req, res) => {
  const { user } = res.locals;
  const { bookId } = req.params;
  await Favorite.create({ userId: user.id, bookId });
  res.json({ message: true });
});
//   const { id } = req.params;
//   try {
//     if (!user) {
//       return res.status(404);
//     }
//     await Book.destroy({ where: { id, userId: user.id } });
//     res.json({ message: true });
//   } catch (err) {
//     return res.status(500).json({ status: 'error', message: `${err.message}` });
//   }

module.exports = router;
