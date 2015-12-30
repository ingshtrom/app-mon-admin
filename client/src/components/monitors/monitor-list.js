'use strict';

const React = require('react');
const Link = require('react-router').Link;
const Monitor = require('../../models/monitor');

const MonitorList = React.createClass({
    propTypes: {
        monitors: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Monitor)).isRequired
    },

    render: function() {
        var createMonitorRow = function (monitor) {
            return (
                <tr key={monitor._id}>
                    <td><Link to={'monitors/' + monitor._id}>{monitor.name}</Link></td>
                    <td>{monitor.url}</td>
                    <td>{monitor.expectedStatusCode}</td>
                    <td>{monitor.pollingInterval}ms</td>
                    <td>{new Date(monitor.updatedAt).toString()}</td>
                    <td>{monitor.isActive}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Url</th>
                            <th>Expected Status Code</th>
                            <th>Polling Interval</th>
                            <th>Updated At</th>
                            <th>Is Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.monitors.map(createMonitorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = MonitorList;
