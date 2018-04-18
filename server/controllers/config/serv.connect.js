import url from 'url'
//import Debug from 'debug'

// !!!! if deploy to heroku have to comment next line !!!!
import connectConfig from './serv.connect.opt'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'

const servConnect = {}

//const debug = Debug('server:servConnect')

if (process.env.NODE_ENV === 'production') {
    const params = url.parse(process.env.DATABASE_URL)
    const auth = params.auth.split(':')
    servConnect.user = auth[0]
    servConnect.password = auth[1]

    servConnect.host = params.hostname
    servConnect.port = params.port
    servConnect.database = params.pathname.split('/')[1]
    servConnect.ssl = true
}

// !!!! if deploy to heroku have to comment next block  !!!!
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
{
    servConnect.user = connectConfig.user
    servConnect.password = connectConfig.password

    servConnect.host = connectConfig.host
    servConnect.port = connectConfig.port
    servConnect.database = connectConfig.database
    servConnect.ssl = connectConfig.extra.ssl
}


export default servConnect
