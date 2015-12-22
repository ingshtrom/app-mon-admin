'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const config = require('./config');
const Monitors = require('./endpoints/monitors-endpoints');
const logger = require('./logger').getInstance('App');

var configureApp = Symbol('configureApp');

class App {
    constructor() {
        this.expressInstance = express();
        this[configureApp]();
        
        // Monitors
        this.monitorsEndpoints = new Monitors();
        this.monitorsEndpoints.bootstrap(this.expressInstance);
        
        // start up the app
        this.expressInstance.listen(config.appPort, function () {
            logger.info('Listening for connections at http://localhost:%s', config.appPort);
        });
    }
    
    [configureApp]() {
        const app = this.expressInstance;
        
        app.use(bodyParser.json());
        app.use(responseTime((req, res, time) => {
            logger.info('[%s] %s %dms', req.method, req.originalUrl, time);
        }));
    }
}

module.exports = App;