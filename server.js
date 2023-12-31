const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')

// handle uncaught exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`)
    console.log('Shutting down the server due to uncaught exception')
    process.exit(1)
})

// Setting Up config file
dotenv.config({path: 'backend/config/config.env'} )

// connection to database
connectDatabase();

const server = app.listen(process.env.PORT,() =>{
    console.log(`server stared on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})

//Handle unhandled promiss rejection
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('shutting down the server due to Unhandled promise rejection');
    server.close(() => {
        process.exit(1)
    })
})