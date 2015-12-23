'use strict';

const React = require('react');
const Link = require('react-router').Link;

const Header = React.createClass({
    render: () => {
        return (
            <nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">APP MON</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="monitors">Monitors</Link></li>
					</ul>
				</div>
			</nav>
        );
    }
});

module.exports = Header;
