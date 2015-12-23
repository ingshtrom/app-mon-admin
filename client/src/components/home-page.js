'use strict';

const React = require('react');
const Link = require('react-router').Link;

const Home = React.createClass({

    render: function () {
        return (
            <div className="jumbotron">
                <h1>APP MON -- Monitor All the Things!</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps.</p>
                <Link to="monitors" className="btn btn-primary btn-lg">Manage Monitors</Link>
            </div>
        );
    }
});

module.exports = Home;
