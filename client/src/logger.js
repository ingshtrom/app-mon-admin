// const winston = require('winston');

function getInstance (namespace) {
    // add our custom transports for all loggers
    // const consoleConfig = {
    //     level: 'debug',
    //     colorize: true,
    //     handleExceptions: true,
    //     timestamp: true,
    //     formatter: formatter
    // };
    // const fileConfig = {
    //     filename: 'app.log',
    //     level: 'silly',
    //     maxsize: 102400,
    //     handleExceptions: true,
    //     timestamp: true,
    //     formatter: formatter
    // };
    // winston.exitOnError = true;

    // return new (winston.Logger)({
    //     transports: [
    //         new (winston.transports.Console)(consoleConfig),
    //         new (winston.transports.File)(fileConfig)
    //     ]
    // });

    // // private impl
    // function formatter (options) {
    //     const message = options.message ? options.message : '';
    //     const meta = (options.meta && Object.keys(options.meta).length ? '\n'+ JSON.stringify(options.meta) : '' );
    //     return Date.now() + ' [' + options.level.toUpperCase() + '] ' + namespace + ' :: ' + message + ' -- ' + meta;
    // }

    return console;
}

module.exports.getInstance = getInstance;
