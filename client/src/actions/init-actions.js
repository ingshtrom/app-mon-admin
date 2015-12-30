'use strict';

const Dispatcher = require('../dispatcher/app-dispatcher');
const ActionTypes = require('../constants/action-types');
const MonitorsApi = require('../api/monitors-api');
const logger = require('../logger').getInstance('InitializeActions');

var InitializeActions = {
    initApp: function () {
        MonitorsApi.getAllMonitors()
        .then((results) => {
            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                monitors: results
            });
        })
    }
};

module.exports = InitializeActions;
