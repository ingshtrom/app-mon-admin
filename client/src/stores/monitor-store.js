'use strict';

const Dispatcher = require('../dispatcher/app-dispatcher');
const ActionTypes = require('../constants/action-types');
const logger = require('../logger').getInstance('MonitorStore');
const EventEmitter = require('events').EventEmitter;
const _ = require('lodash');

const CHANGE_EVENT = 'monitors-store-change';
let _monitors = [];

const MonitorStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllMonitors: function () {
        return _monitors;
    },

    getMonitorById: function (id) {
        return _.find(_monitors, { _id: id });
    }
});

Dispatcher.register((action) => {
    logger.info('received a dispatch', action);
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _monitors = action.monitors;
            logger.info('initializing monitors: ', _monitors);
            MonitorStore.emitChange();
            break;
        case ActionTypes.UPDATE_MONITOR:
            let newMonitor = action.monitor;
            _monitors.map((monitor) => {
                if (monitor._id === newMonitor._id) {
                    return newMonitor;
                } else {
                    return monitor;
                }
            });
            logger.info('updated monitor', _monitors);
            MonitorStore.emitChange();
            break;
        default:
            // no-op
    }
});

module.exports = MonitorStore;
