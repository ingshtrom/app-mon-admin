'use strict';

const Promise = require('bluebird');
const config = require('../config');
const logger = require('../logger').getInstance('MonitorsApi');
const Monitor = require('../models/monitor');

function getAllMonitors() {
    return Promise.resolve($.get(config.apiUrl + '/monitors'))
    .then((data) => {
        return data.map((dataItem) => {
            return Monitor.fromJson(dataItem);
        });
    })
    .catch((err) => {
        logger.error('Error while getting all monitors', err);
    });
}

module.exports.getAllMonitors = getAllMonitors;
