const Pool = require('pg').Pool

//connect to PostgreSQL database
const pool = new Pool({
    host: 'nba-test-instance-1.cvxs8zev5d0u.us-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'candidato',
    password: 'ripKobeBryant',
    database: 'postgres'
})

//join is used to get the team each player is in to display in the list
const getPlayers = (req, res) => {
    pool.query('SELECT p.*, t.city, t.name FROM players p \
                    JOIN teams t on p.team_id = t.team_id \
                    ORDER BY p.first_name',
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getPlayerById = (req, res) => {
    const id = req.params.id

    pool.query('SELECT * FROM players p \
                    JOIN player_stats ps ON p.player_id = ps.player_id \
                    WHERE p.player_id = $1', [id],
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getTeams = (req, res) => {
    pool.query('SELECT * FROM teams ORDER BY city ASC',
        (error, results) => {
            if (error){
                throw error
            }
            res.status(200).json(results.rows)
        })
}

const getTeamById = (req, res) => {
    const id = req.params.id

    pool.query('SELECT * FROM teams t \
                    JOIN team_stats ts ON t.team_id = ts.team_id\
                    WHERE t.team_id = $1', [id],
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
