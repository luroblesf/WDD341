const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1Controller');

app.get('/', lesson1Controller.luciaRoute);
app.get('/astrid', lesson1Controller.astridRoute);

const port = 3000;

app.listen(process.env.PORT || port, () => {
    console.log(`Web Server is listening at port ${port}`);
})