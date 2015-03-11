var React = require('react');
var Router = require('react-router');

var Home = require('./home/home');
var Login = require('./login/login.jsx');
var Newlead = require('./newlead/newlead.jsx');
var Page1 = require('./page1/page1');

window.$ = require('jquery');

var App = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false
    }
  },

	render: function() {

    if (this.state.loggedIn) {
      return Router.RouteHandler();
    } else {
      return Login();
    }

	}
});

var routes = Router.Route({ handler: App },
	Router.DefaultRoute({ handler: Login }),
	Router.Route({ name: "page1", path: "/page1", handler: Page1 }),
  Router.Route({ name: "newlead", path: "/newlead", handler: Newlead })
);

Router.run(routes, function(Handler) {
	React.render(Handler(), document.getElementById("app"));
});
