'use strict';

const logger = require('../logger').getInstance('MonitorsEndpoints');
const MonitorsPersistence = require('../db/monitors-persistence').Model;
const _ = require('lodash');

const getAllMonitors = Symbol('getAllMonitors');
const createMonitor = Symbol('createMonitor');
const getMonitorById = Symbol('getMonitorById');
const deleteMonitor = Symbol('deleteMonitor');
const updateMonitor = Symbol('updateMonitor');

class MonitorsEndpoints {
    bootstrap(appInstance) {
        var self = this;
        appInstance.post('/monitors', self[createMonitor]);
        appInstance.get('/monitors', self[getAllMonitors]);
        appInstance.get('/monitors/:id', self[getMonitorById]);
        appInstance.put('/monitors/:id', self[updateMonitor]);
        appInstance.delete('/monitors/:id', self[deleteMonitor]);
    }

    [createMonitor](req, res) {
        MonitorsPersistence.createAsync(req.body)
        .then((newMonitor) => {
            res.status(201).json(newMonitor);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }

    [getAllMonitors](req, res) {
        MonitorsPersistence.findAsync()
        .then((monitors) => {
            res.status(200).json(monitors);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }

    [getMonitorById](req, res) {
        MonitorsPersistence.findById(req.params.id)
        .then((monitor) => {
            res.status(200).json(monitor);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }

    [deleteMonitor](req, res) {
        MonitorsPersistence.findByIdAsync(req.params.id)
        .then((monitor) => {
            return monitor.removeAsync();
        })
        .then((monitor) => {
            res.status(202).json(monitor);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    }
    
    [updateMonitor](req, res) {
        MonitorsPersistence.findByIdAsync(req.params.id)
        .then((monitor) => {
            _.extend(monitor, req.body);
            return monitor.save();
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    }
}

module.exports = MonitorsEndpoints;