$ = jQuery = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes.jsx');
// const InitializeActions = require('./actions/initializeActions');

// InitializeActions.initApp();

ReactDOM.render(routes, document.getElementById('app'));