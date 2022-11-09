require('@babel/register');
const express = require('express');
const { sequelize } = require('./db/models');

const app = express();
const serverConfig = require('./config/serverConfig');
// роутеры
const mainPageRouter = require('./routes/mainPageRouter');
const authRouter = require('./routes/authRouter');
const bookPageRouter = require('./routes/bookPageRouter');
const favoriteRouter = require('./routes/favoriteRouter');
const searchBookRouter = require('./routes/searchBookRouter');
const editBookRouter = require('./routes/editBookRouter');
const commentsRouter = require('./routes/commentsRouter');


const PORT = process.env.PORT ?? 3000;
// конфигурация приложения
serverConfig(app);
// маршрутизация приложения
app.use('/', mainPageRouter);
app.use('/auth', authRouter);
app.use('/book', bookPageRouter);
app.use('/favorite', favoriteRouter);
app.use('/editbook', editBookRouter);
app.use('/search', searchBookRouter);
app.use('/comment', commentsRouter)


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Server has been started on port ${PORT}`);
  } catch (error) {
    console.log(`Проблемы с БД! ${error.message}.`);
  }
});
