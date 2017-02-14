var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStores.js');
var SearchForm = require('./SearchForm.js')

var App = React.createClass({
	render: function(){
		return(
			<div> 
				<SearchForm />
			</div>
		)
	}
});

module.exports = App;