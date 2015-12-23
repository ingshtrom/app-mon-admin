'use strict';

const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;
const Redirect = require('react-router').Redirect;

const App = require('./components/app');
const HomePage = require('./components/home-page');
const MonitorPage = require('./components/monitors/monitor-page');

const routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage} />
            <Route path="monitors" component={MonitorPage} />
            // <Route path="author" component={ManageAuthorPage} />
            // <Route path="author/:id" component={ManageAuthorPage} />
            // <Route path="*" component={NotFoundPage}/>
            // // I had trouble getting redirects to work
            // // think it is because of our history method
            // <Redirect from="about-us" to="about" />
            // <Redirect from="authurs" to="authors" />
            // <Redirect from="about/*" to="about" />
        </Route>
    </Router>
);

module.exports = routes;
