'use strict';

const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const Redirect = require('react-router').Redirect;

const App = require('./components/app');
const HomePage = require('./components/home-page');
const MonitorPage = require('./components/monitors/monitor-page');
const ManageMonitorPage = require('./components/monitors/manage-monitor-page');

const routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="monitors" component={MonitorPage} />
            <Route path="monitors/new" component={ManageMonitorPage} />
            <Route path="monitors/:id" component={ManageMonitorPage} />
        </Route>
    </Router>
);

module.exports = routes;
