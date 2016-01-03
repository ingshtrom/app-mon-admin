'use strict';

const Dispatcher = require('../dispatcher/app-dispatcher');
const ActionTypes = require('../constants/action-types');
const MonitorsApi = require('../api/monitors-api');
const logger = require('../logger').getInstance('MonitorActions');

const MonitorActions = {
    updateMonitor: function (monitor) {
        MonitorsApi.updateMonitor(monitor)
        .then((updatedMonitor) => {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_MONITOR,
                monitor: updatedMonitor
            });
        });
    }
};

module.exports = MonitorActions;
