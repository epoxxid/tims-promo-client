import pizzaInfo from './pizzaInfo';

const ranges = {
  C: [1, 1000],
  // C0: [1, 1000],
  IN: [1, 1000],
};

class OfferLoader {

  createOffer(offerData) {
    let offer = {
      promoCode: offerData.code,
      title: offerData.name,
      fromPrice: parseFloat(offerData.price),
      size: parseInt(offerData.size),
      isActive: true,
      validTo: 'бессрочно',
      image: pizzaInfo.getPizzaImageUrl(offerData.name),
      ingredients: pizzaInfo.getPizzaIngredients(offerData.name)
    };

    console.log(offer);

    if (offerData.validTo) {
      offer.validTo = offerData.validTo;

      let [day, month, year] = offerData.validTo.split('.');

      let date = new Date();
      date.setDate(parseInt(day));
      date.setMonth(parseInt(month) - 1);
      date.setFullYear(parseInt(year) + 2000);

      offer.isActive = date > new Date();
    }

    return offer;
  }

  tryCode(code, cb) {
    const url = `/offers?code=${code}`;
    fetch(url)
      .then(result => {
        return result.json().then(json => {
          return json.status ? cb(this.createOffer(json.offer)) : cb(null)
        })
      })
      .catch(() => cb(null));
  };

  run(onOfferFound) {
    for (let letter in ranges) {
      if (!ranges.hasOwnProperty(letter)) continue;
      let range = ranges[letter];
      for (let i = range[0]; i <= range[1]; i++) {
        let code = `${letter}${i}`;
        this.tryCode(code, offer => {
          return offer ? onOfferFound(offer) : null;
        })
      }
    }
  }
}

export default new OfferLoader()