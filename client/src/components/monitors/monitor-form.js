'use strict';

const React = require('react');
const Monitor = require('../../models/monitor');
const TextInput = require('../common/text-input');

const MonitorForm = React.createClass({
    propTypes: {
        monitor: React.PropTypes.instanceOf(Monitor).isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSave: React.PropTypes.func.isRequired
        // errors: React.PropTypes.shape({
        //     name: React.PropTypes.string,
        //     url: React.PropTypes.string,
        //     expectedStatusCode: React.PropTypes.string,
        //     pollingInterval: React.PropTypes.string,
        // })
    },

    render: function () {
        return (

            <form>

                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName} />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName} />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = MonitorForm;
