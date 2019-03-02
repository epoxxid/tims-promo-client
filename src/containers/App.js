import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Filters from '../components/Filters';
import OfferList from '../components/OfferList';
import Footer from '../components/Footer';
import {applyFilter, loadOffers, startLoading} from '../actions';

// TODO: Remove
import offers from '../data/offers';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.store.dispatch(startLoading()); // Show loading indicator
  }

  componentDidMount() {
    setTimeout(() => {
      this.store.dispatch(loadOffers(offers)); // Hide loading indicator & load offers
    }, 1000);
  }



  applyFilter(filter) {
    this.store.dispatch(applyFilter(filter));
  };

  render() {
    const {loading, filter, offers} = this.store.getState();

    return (
      <div className="App">
        <Header subtitle={loading ? 'загружаю...' : ''}/>
        <Filters
          filter={filter}
          onFilterSet={(f) => this.applyFilter(f)}/>
        <OfferList
          loading={loading}
          offers={offers}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;