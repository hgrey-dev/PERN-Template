const Pool = require("pg").Pool;

const pool = new Pool({
    user:"gxkvbhri",
    password:"ubKMGh-Er_alXY0d-cXRMj2bndH3tWS9",
    host:"ziggy.db.elephantsql.com",
    port:5432,
    database:"gxkvbhri"
})
module.exports = pool