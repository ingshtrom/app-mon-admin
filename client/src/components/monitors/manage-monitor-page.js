'use strict';

const React = require('react');
const MonitorStore = require('../../stores/monitor-store');

const ManageMonitorPage = React.createClass({
    componentWillMount: function () {
        var monitorId = this.props.params.id;

        console.log('upon navigation, current monitor id is', monitorId);
        if (monitorId) {
            this.setState({ monitor: MonitorStore.getMonitorById(monitorId) });
        }
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

    render: () => {
        return (
            <div></div>
        );
    }
});

module.exports = ManageMonitorPage;
