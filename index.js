const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(80, () => console.log('Running express server...'));