import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as gamesActions from '../actions/games';
import App from '../components/App';
import orderBy from 'lodash/orderBy';

const sortBy = (games, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(games, 'price', 'desc');
    case 'price_low':
      return orderBy(games, 'price', 'asc');
    case 'author':
      return orderBy(games, 'author', 'asc');
    default:
      return games;
  }
};

const filterGames = (games, searchQuery) =>
  games.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  );

const searchGames = (games, filterBy, searchQuery) => {
  return sortBy(filterGames(games, searchQuery), filterBy);
};

const mapStateToProps = ({ games, filter }) => ({
  games: games.items && searchGames(games.items, filter.filterBy, filter.searchQuery),
  isReady: games.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(gamesActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
