const React = require('react');
const Header = require('./common/header');

const App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;