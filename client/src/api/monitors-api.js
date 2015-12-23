'use strict';

const Promise = require('bluebird');
const config = require('../config');
const logger = require('../logger');

function getAllMonitors() {
    return Promise.resolve($.get(config.apiUrl + '/monitors'))
    .catch((err) => {
        logger.error('Error while getting all monitors', err);
    });
}

module.exports.getAllMonitors = getAllMonitors;
