'use strict';

const Promise = require('bluebird');
const config = require('../config');
const logger = require('../logger').getInstance('MonitorsApi');
const Monitor = require('../models/monitor');

function getAllMonitors() {
    return Promise.resolve($.get(config.apiUrl + '/monitors'))
    .then((responseData) => {
        return responseData.map((dataItem) => {
            return Monitor.fromJson(dataItem);
        });
    })
    .catch((err) => {
        logger.error('Error while getting all monitors', err);
    });
}

function updateMonitor(updatedMonitor) {
    const ajaxUrl = config.apiUrl + '/monitors/' + updatedMonitor._id;
    const ajaxConfig = {
        accepts: 'application/json',
        cache: false,
        data: updatedMonitor,
        method: 'PUT'
    };

    return Promise.resolve($.ajax(ajaxUrl, ajaxConfig))
    .then((responseData) => {
        return Monitor.fromJson(responseData);
    })
    .catch((err) => {
        logger.error('Error while updating monitor', err);
    });
}

module.exports.getAllMonitors = getAllMonitors;
module.exports.updateMonitor = updateMonitor;
