const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');
const ssr = require('../middlewares/ssr');
const getUser = require('../middlewares/getUser');

// главная конфигурация приложения
const serverConfig = (app) => {
  // использование middleware
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(ssr);
  app.use(getUser);
};

module.exports = serverConfig;
