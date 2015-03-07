var React = require('react');
var Router = require('react-router');

var Home = require('./home/home');
var Page1 = require('./page1/page1');

var App = React.createClass({
	render: function() {
		return Router.RouteHandler();
	}
});

var routes = Router.Route({ handler: App },
	Router.DefaultRoute({ handler: Home }),
	Router.Route({ name: "page1", path: "/page1", handler: Page1 })
);

Router.run(routes, function(Handler) {
	React.render(Handler(), document.body);
});
