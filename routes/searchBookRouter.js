const router = require('express').Router();
const SearchBookPage = require('../views/SearchBookPage.jsx');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(SearchBookPage, { user });
});

module.exports = router;
