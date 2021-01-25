import {Sequelize} from 'sequelize';

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const db = process.env.DB_NAME;
const host = process.env.DB_HOST;

if (!user || !pass || !db || !host) {
  throw Error("define env vars");
  process.exit(0);
}

const dialect = 'postgres';
const conn = new Sequelize(db, user, pass, {host, dialect});

conn.authenticate().then((err) => { throw err; });

export { conn };