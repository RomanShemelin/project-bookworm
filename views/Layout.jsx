const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link href="/css/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html >
  );
};
