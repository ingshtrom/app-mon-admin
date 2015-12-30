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
        default:
            // no-op
    }
});

module.exports = MonitorStore;
