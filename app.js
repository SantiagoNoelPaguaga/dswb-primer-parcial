const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.listen(PORT, () => {
    console.log('SERVER RUNNING @ PORT 3000')
});

module.exports = app;