'use strict';

const mongoose = require('mongoose');
const config = require('../config');
const Bluebird = require('bluebird');

Bluebird.promisifyAll(mongoose);

mongoose.connect(config.mongoConnectionUrl);

module.exports = mongoose;