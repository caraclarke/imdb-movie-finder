var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({

  onSubmit: function(e) {
    e.preventDefault();

    var movie = {
      title: this.refs.title.value.trim()
    }

    AppActions.searchMovies(movie);
    $('#movieId').val('');
  },

  render: function() {
    return (
      <div className="search-form">
        <h1 className="text-center">Search For a Movie</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input id="movieId" type="text" className="form-control" ref="title" placeholder="Movie Title" />
          </div>

          <button className="btn btn-primary btn-block">Search Movies</button>
        </form>

      </div>
    );
  }

});

module.exports = SearchForm;