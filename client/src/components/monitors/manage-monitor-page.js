'use strict';

const React = require('react');
const MonitorStore = require('../../stores/monitor-store');
const MonitorForm = require('./monitor-form');

const ManageMonitorPage = React.createClass({
    componentWillMount: function () {
        var monitorId = this.props.params.id;

        console.log('upon navigation, current monitor id is', monitorId);
        if (monitorId) {
            this.setState({ monitor: MonitorStore.getMonitorById(monitorId) });
        }
    },

    setMonitorState: function (event) {
        var field = event.target.name;
        var value = event.target.value || event.target.checked;
        this.state.monitor[field] = value;
        return this.setState({
            monitor: this.state.monitor,
            dirty: true
        });
    },

    getInitialState: function () {
        return {
            monitor: {
                _id: '',
                name: '',
                url: '',
                expectedStatusCode: 200,
                pollingInterval: 5000,
                isActive: true
            },
            errors: {},
            dirty: false
        };
    },

    render: function() {
        return (
            <div>
                <h1>{this.state.monitor._id ? 'Manage Monitor' : 'New Monitor'}</h1>
            <MonitorForm
                onChange={this.setMonitorState} />
            </div>
        );
    }
});

module.exports = ManageMonitorPage;
