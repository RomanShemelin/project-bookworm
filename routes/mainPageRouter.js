const router = require('express').Router();
const Main = require('../views/Main.jsx');

router.get('/', (req, res) => {
  const { user } = res.locals;
  res.renderComponent(Main, { user, title: 'Simple app' });
});

module.exports = router;
