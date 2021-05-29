var env = process.env

module.exports = {
    dbHost: env.DB_HOST || 'localhost',
    dbUser: env.DB_USER || 'root',
    dbPassword: env.DB_PASSWORD || 'root',
    database: env.DATABASE || 'contactbook'
}
