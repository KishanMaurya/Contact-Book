const mysql = require('mysql')

const config = require('./config')

const con = mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.database,
    timezone: 'utc'
})

module.exports.db = con

module.exports.createConnections = function() {
    new Promise((resolve, reject) => {
        con.connect(err => {
            if (err) return reject(err)

            resolve()
        })
    })
}
