'use strict';

const _ = require('lodash');

class Monitor {
    static fromJson (objOrJsonString) {
        const passedInObj = typeof(objOrJsonString) === 'string' ? JSON.parse(objOrJsonString) : objOrJsonString;
        let newMonitor = new Monitor();
        newMonitor = _.extend(newMonitor, passedInObj);
        return newMonitor;
    }
}

module.exports = Monitor;
