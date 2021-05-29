const { db } = require('../connection');
const config = require('../config');

class Helper{

    async promisifyQueries(sql, values) {
        return new Promise((resolve, reject) => {
            db.query(sql, values, (err, rows, fields) => {
                if (err) {
                    //  console.log("dberror", err)
                    return reject(err)
                }

                resolve(rows)
            })
        })
    }

    async respond(resp, res, next) {
        if (resp instanceof Error)
            return next(resp)
        res.json(resp);
    }
}

module.exports = new Helper()
