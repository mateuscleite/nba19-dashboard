const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express();
const port = process.env.PORT || 8000;

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

//list of players
app.get('/players', db.getPlayers)
//search player by name
app.get('/players/name/:name', db.getPlayerByName)
//details of a player
app.get('/players/:id', db.getPlayerById)

//list of teams
app.get('/teams', db.getTeams)
//get the stats of all teams
app.get('/teams/stats', db.getAllTeamsStats)
//search team by name
app.get('/teams/name/:name', db.getTeamByName)
//details of a team
app.get('/teams/:id', db.getTeamById)
//get a specific team lineup
app.get('/teams/:id/lineup', db.getTeamLineup)