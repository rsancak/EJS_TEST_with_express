const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', async (req, res) => {
    res.status(200).render('index');
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server Ready!');
});
