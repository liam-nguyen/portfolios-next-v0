const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();
    const PORT = parseInt(process.env.PORT, 10) || 3000;

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) console.error(err);

      console.log(`> Ready on port ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex);
  });
