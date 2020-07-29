const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Olá Pessoal');
})

app.listen(3333);
