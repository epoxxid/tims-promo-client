import React from 'react';
import Ingredients from './Ingredients';

function OfferTable({offers}) {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Изображение</th>
        <th>Название</th>
        <th>Промокод</th>
        <th>Действителен до</th>
        <th>От суммы</th>
      </tr>
      </thead>
      <tbody>
      {offers.map(offer => {
        return (
          <tr className="Offer" key={offer.promoCode}>
            <td width="1%">
              <img
                className="Offer-image"
                src={offer.image}
                alt={offer.title}/>
            </td>
            <td className="Offer-title">
              <h5>{offer.title}</h5>
              <Ingredients list={offer.ingredients}/>
            </td>
            <td className="Offer-promo-code">
                <span className={offer.isActive ? 'active' : 'inactive'}>
                  {offer.promoCode}
                </span>
            </td>
            <td className="Offer-valid-to">{offer.validTo}</td>
            <td className="Offer-from-price">от {offer.fromPrice} руб</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default OfferTable;