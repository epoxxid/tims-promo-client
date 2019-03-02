import React from 'react';

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
        const offerDate = [
          offer.validTo.getDate(),
          offer.validTo.getMonth(),
          offer.validTo.getFullYear()
        ].join('.');
        const isActive = offer.validTo > new Date();
        return (
          <tr className="Offer" key={offer.promoCode}>
            <td width="1%">
              <img
                className="Offer-image"
                src={offer.image}
                alt={offer.title}/>
            </td>
            <td>
              <h5 className="Offer-title">{offer.title}</h5>
              <small className="Offer-description">{offer.description}</small>
            </td>
            <td className="Offer-promo-code">
                <span className={isActive ? 'active' : 'inactive'}>
                  {offer.promoCode}
                </span>
            </td>
            <td className="Offer-valid-to">{offerDate}</td>
            <td className="Offer-from-price">от {offer.fromPrice} руб</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default OfferTable;