var React = require('react');

module.exports = React.createClass({

	render: function() {
		if (!this.state.productsLoaded) {
			return React.DOM.div(null, 'Loading...');
		} else {
			var productList = this.state.products.map(function(product) {
				ProductItem(product)
			});

			return 
				h3 - "Products"
				productList
		}
	},

	componentDidMount: function() {
		if (!this.state.productsLoaded) {
			this.startLoading();
		}
	},

	startLoading: function() {
		$.ajax("...").done(function(data) {
			this.setState(productsLoaded: true, productList: products)
		});
	}

});


var ProductItem = React.createClass({

	render: 
		h3 - this.props.name,
		p - this.props.description
		label - this.props.price

})
