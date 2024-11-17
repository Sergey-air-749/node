const express = require('express');
let fs = require('fs');

const app = express();
const PORT = 5000;


app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true, parameterLimit: 100000, limit: '1000mb'}));
app.use(express.json({limit: '1000mb'}));



app.get('/', (req, res) => {
    res.render('index');
});


//Запуск сервера

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});