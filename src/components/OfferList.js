import React from 'react';
import loadIndicator from '../img/loading.gif';
import OfferTable from "./OfferTable";

function OfferList({loading, offers}) {
  return (
    <main className="OfferList">
      {
        loading ?
          <div className="OfferList-loading-indicator">
            <img src={loadIndicator} alt="Загружаю"/>
          </div>:
          <OfferTable offers={offers}/>
      }
    </main>
  );
}

export default OfferList;