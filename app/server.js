const express = require('express');
const http = require('http');
const path = require('path');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.get('/', (req, res) =>  res.render('home', {
    name: 'developer'
}));

const server = new http.Server(app);
server.listen(3200);

