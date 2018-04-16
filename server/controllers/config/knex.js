import servConnect from './serv.connect'
import knex from 'knex'

const knexConfig = {
  client: 'pg',
  connection: {
    user: servConnect.user,
    password: servConnect.password,
    host: servConnect.host,
    port: servConnect.port,
    database: servConnect.database,
   // ssl: true,
    ssl: servConnect.ssl,
    max: 100
  },
  pool: {
    min: 2,
    max: 10
  }
}

export default knex(knexConfig)
