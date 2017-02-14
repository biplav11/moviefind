var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStores.js');

var App = React.createClass({
	render: function(){
		return(
			<div> 
				My Movie App
			</div>
		)
	}
});

module.exports = App;