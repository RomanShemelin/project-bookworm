const router = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login.jsx');
const Registration = require('../views/Registration.jsx');
const { User } = require('../db/models');

router
  .route('/login')
  .get((req, res) => {
    res.renderComponent(Login, { title: 'Login in system' });
  })
  .post(async (req, res) => {
    try {
      // ищем пользователя в БД
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.json({ status: 'error', message: 'пользователь с такими данными не существует' });
        return;
      }
      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        res.json({ status: 'error', message: 'неверный логин или пароль' });
        return;
      }
      req.session.user_id = user.id;
      console.log(req.session);
      res.json({ status: true });
    } catch (error) {
      res.json({ status: false });
    }
  });
router
  .route('/registration')
  .get((req, res) => {
    res.renderComponent(Registration, { title: 'Registration in system' });
  })
  .post(async (req, res) => {
    const {
      name, email, password, checkPassword,
    } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        res.json({ status: 'error', message: 'Пользователь с такой почтой уже существует' });
        return;
      }
      if (password.length < 8) {
        res.json({ status: 'error', message: 'Пароль должен быть не меньше 8 символов' });
        return;
      }
      if (password === checkPassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
        });
        req.session.user_id = newUser.id;
        res.status(200).json({ text: 'new user created' });
      } else {
        res.json({ status: 'error', message: 'Пароли не совпадают' });
        return;
      }
    } catch (error) {
      res.json({ status: false });
    }
  });

router.get('/signout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Session delete error' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router;
