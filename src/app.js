const express = require('express');
const {
  loginRoutes,
  userRoutes,
  categoriesRoutes,
  postRoutes,
} = require('./Routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoutes.router);
app.use('/user', userRoutes.router);
app.use('/categories', categoriesRoutes.router);
app.use('/post', postRoutes.router);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
