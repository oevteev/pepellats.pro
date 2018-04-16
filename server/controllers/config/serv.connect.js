import url from 'url'
import Debug from 'debug'
import connectConfig from './serv.connect.opt'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'

const servConnect = {}

const debug = Debug('server:servConnect')

if (process.env.NODE_ENV === 'production') {
    const params = url.parse(process.env.DATABASE_URL)
    const auth = params.auth.split(':')
    servConnect.user = auth[0]
    servConnect.password = auth[1]
}
else
{
    servConnect.user = connectConfig.user
    servConnect.password = connectConfig.password
}

servConnect.host = connectConfig.host
servConnect.port = connectConfig.port
servConnect.database = connectConfig.database
servConnect.ssl = connectConfig.extra.ssl

debug('Heroku :  host =',  servConnect.host, 'db =',  servConnect.database)

/*

if (process.env.NODE_ENV === 'production') {
  const params = url.parse(process.env.DATABASE_URL)
  const auth = params.auth.split(':')
  servConnect.user = auth[0]
  servConnect.password = auth[1]
  servConnect.host = params.hostname
  servConnect.port = params.port
  servConnect.database = params.pathname.split('/')[1]
  servConnect.ssl = true

  debug('Heroku production:  host =',  servConnect.host, 'db =',  servConnect.database)
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {

     servConnect.user = connectConfig.user
     servConnect.password = connectConfig.password
     servConnect.host = connectConfig.host
     servConnect.port = connectConfig.port
     servConnect.database = connectConfig.database
     servConnect.ssl = connectConfig.extra.ssl



    debug('Heroku development:  host =',  servConnect.host, 'db =',  servConnect.database)
}
*/

export default servConnect
