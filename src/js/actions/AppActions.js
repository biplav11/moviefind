var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
	searchMovies: function(movie){
		console.log('Searching for movie: '+ movie.title);
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	}
}

module.exports = AppActions;