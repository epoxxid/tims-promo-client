import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Filters from './Filters';
import OfferList from './OfferList';
import Footer from './Footer';
import {applyFilter, startLoading} from '../actions/index';
import {connect} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    props.startLoading(); // Show loading indicator
  }

  render() {
    const {loading} = this.props;

    return (
      <div className="App">
        <Header subtitle={loading ? 'загружаю...' : ''}/>
        <Filters/>
        <OfferList loading={loading} />
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
};

const mapDispatchToProps = () => {
  return {
    applyFilter,
    startLoading
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);