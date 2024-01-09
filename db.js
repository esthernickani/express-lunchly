/** Database for lunchly */

const pg = require("pg");
require('dotenv').config()


const db = new pg.Client(`postgresql://esther:${process.env.DB_PASSWORD}@localhost:5432/lunchly`);

db.connect();

module.exports = db;
