const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express();
const port = 8000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.listen(port, () => console.log(`Listening at port ${ port }`))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

app.get('/players', db.getPlayers)
app.get('/players/:id', db.getPlayerById)
app.get('/teams', db.getTeams)
app.get('/teams/:id', db.getTeamById)