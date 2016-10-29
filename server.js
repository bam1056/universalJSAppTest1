const express = require('express')
const config = require('./webpack.config');
const webpack = require('webpack')
const path = require('path')
const app = express()
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

const createApiRouter = () => {
  const router = express.Router();
  router.get('/user', (req, res) => {
    res.json('THIS IS CRAZY')
  });

  router.post('/newuser', (req, res) => {
    res.send('I AM A POST')
  })
  return router;
}

const createPageRouter = () => {
  const router = express.Router();
  router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
  return router;
}

const apiRouter = createApiRouter();
const pagesRouter = createPageRouter();

app.use('/api', apiRouter);
app.use('/', pagesRouter);

app.listen(3000, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000');
});
