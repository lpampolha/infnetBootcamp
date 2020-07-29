const express = require('express');
const app = express();

app.get('/get',(req, res) => {
    res.send('Show!');
})

app.listen(3000, () => (console.log('Consegui')));
