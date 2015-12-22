'use strict';

const mongoose = require('./mongoose-connector');
const Schema = require('./mongoose-connector').Schema;

const schema = new Schema({
    name: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    url: { type: String, required: true },
    expectedStatusCode: { type: Number, required: true },
    pollingInterval: { type: Number, default: 5000 },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});
const Model = mongoose.model('Monitor', schema);

module.exports.schema = schema;
module.exports.Model = Model;