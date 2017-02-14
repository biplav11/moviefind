var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStores.js');

var SearchForm = React.createClass({
	render: function(){
		return(
			<div className="search-form">  
				<h1 className= "text-center">Search For A movie</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="Enter the movie title" />
					</div>
					<button className="btn btn-primary btn-block">Search Movies</button>
				</form>
			</div>
		)
	},

	onSubmit: function(e){
		e.preventDefault();

		var movie = {
			title: this.refs.title.value.trim()
		}

		AppActions.searchMovies(movie);
	}
});

module.exports = SearchForm;