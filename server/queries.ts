const Pool = require('pg').Pool

//connect to PostgreSQL database
const pool = new Pool({
    host: 'nba-test-instance-1.cvxs8zev5d0u.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'candidato',
    password: 'ripKobeBryant',
    database: 'postgres'
})

const getPlayers = (req, res) => {
    pool.query('SELECT * FROM players ORDER BY first_name',
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getPlayerById = (req, res) => {
    const id = req.params.id

    pool.query('SELECT * FROM players WHERE player_id = $1', [id],
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getTeams = (req, res) => {
    pool.query('SELECT * FROM teams ORDER BY name',
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getTeamById = (req, res) => {
    const id = req.params.id

    pool.query('SELECT * FROM teams WHERE team_id = $1', [id],
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

module.exports = {
    getPlayers,
    getPlayerById,
    getTeams,
    getTeamById
}
