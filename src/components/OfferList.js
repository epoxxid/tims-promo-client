import React from 'react';
import loadIndicator from '../img/loading.gif';
import OfferTable from "./OfferTable";
import {connect} from "react-redux";

function OfferList({loading, offers, filter}) {

  // Apply filters
  const filteredOffers = offers.filter(offer => {
    let isValid = true;

    if (filter.activeOnly) {
      isValid = isValid && offer.isActive;
    }

    if (filter.maxPrice) {
      isValid = isValid && offer.fromPrice <= filter.maxPrice;
    }

    return isValid;
  });

  return (
    <main className="OfferList">
      {
        loading
          ?
          <div className="OfferList-loading-indicator">
            <img src={loadIndicator} alt="Загружаю"/>
          </div>
          :
          <OfferTable offers={filteredOffers}/>
      }
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    offers: state.offers
  }
};

export default connect(mapStateToProps)(OfferList);