const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'src')))
  .use(express.static(path.join(__dirname, 'node_modules')))
  .get('/*', (req, res) => res.render('src/index'))
  .listen(process.env.PORT || 8080);

  console.log('__dirname'+__dirname);