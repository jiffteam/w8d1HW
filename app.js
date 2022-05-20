const express = require('express');
const morgan = require('morgan');
// express app
const app = express();

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit amet consectur'},
        {title: 'Mario finds stars', snippet: 'lorem ipsum dolor sit amet consectur'},
        {title: 'How to defeat bowser', snippet: 'lorem ipsum dolor sit amet consectur'},
    ];
    res.render('index', {title: 'Home', blogs});
});




app.get('/about', (req, res) => {
    res.sendFile('about', { title: 'about'});
});

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});

