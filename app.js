const express = require('express');
const app = express();
const path = require('path');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
