const express = require('express');

const app = express();
const port = 5001;
const pool = require('./modules/pool');

app.use(express.static('server/public'))
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('listening on port, ', port);
});

///////////////////client stuff///////////////////

let taskList = [];

app.post('/taskList', (req, res) => {
    console.log('WE POSTIN DA BODY AND DA TASK LIST. WATCHA GUNNA DO ABOUT IT', req.body);
    res.sendStatus(200);
});

app.get('/taskList', (req, res) => {
    console.log('WE GET DA TASK LIST');
    // res.send(taskList);
    pool.query('SELECT * FROM tasks')
    .then((result) =>{
        res.send(result.rows);
    })
});
