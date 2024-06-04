const express = require('express');

const app = express();

app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

module.exports = {app};