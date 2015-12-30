'use strict';

const React = require('react');
const MonitorList = require('./monitor-list');
const MonitorStore = require('../../stores/monitor-store');
const Link = require('react-router').Link;

const MonitorPage = React.createClass({
    getInitialState: function () {
       return {
           monitors: MonitorStore.getAllMonitors()
       };
    },

    componentWillMount: function () {
        MonitorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        MonitorStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({ monitors: MonitorStore.getAllMonitors() });
    },

    render: function() {
        return (
            <div>
                <h1>Monitors</h1>
                <Link to="monitors/new" className="btn btn-default">Add Monitor</Link>
                <MonitorList monitors={this.state.monitors} />
            </div>
        );
    }
});

module.exports = MonitorPage;
