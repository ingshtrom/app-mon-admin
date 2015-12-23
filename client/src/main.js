$ = jQuery = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./routes');
const InitActions = require('./actions/init-actions');

InitActions.initApp();

ReactDOM.render(routes, document.getElementById('app'));
