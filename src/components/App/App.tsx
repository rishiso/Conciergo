import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import { Business } from '../../types';

interface AppState {
  businesses: Business[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term: string, location: string, sortBy: string): void {
    Yelp.search(term, location, sortBy).then((businesses: Business[] | undefined) => {
      this.setState({businesses: businesses ?? []})
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Conciergo</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
