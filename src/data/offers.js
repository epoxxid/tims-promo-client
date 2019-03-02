import pizza4cheese from '../img/4-cheese.jpg';
import pizzaJalapenoBbq from '../img/jalapeno-bbq.jpg';
import pizzaSupreme from '../img/supreme.jpg';
import pizzaCheeseburger from '../img/cheeseburger.jpg';
import pizzaPhiladelphia from '../img/philadelphia-chicken.jpg';

export default [
  {
    id: 1,
    title: 'Четыре сыра',
    size: 30,
    promoCode: 'C004',
    validTo: new Date('Dec 21, 2019'),
    fromPrice: 599.00,
    image: pizza4cheese
  },
  {
    id: 1,
    title: 'Халапеньо BBQ',
    size: 25,
    promoCode: 'A441',
    validTo: new Date('Mar 1, 2019'),
    fromPrice: 469.00,
    image: pizzaJalapenoBbq
  },
  {
    id: 1,
    title: 'Суприм',
    size: 30,
    promoCode: 'C008',
    validTo: new Date('Apr 7, 2019'),
    fromPrice: 599.00,
    image: pizzaSupreme
  },
  {
    id: 1,
    title: 'Чизбургер',
    size: 25,
    promoCode: 'IN23',
    validTo: new Date('Jun 2, 2019'),
    fromPrice: 499.00,
    image: pizzaCheeseburger
  },
  {
    id: 1,
    title: 'Цыпленок Филадельфия',
    size: 25,
    promoCode: 'C123',
    validTo: new Date('Dec 21, 2019'),
    fromPrice: 529.00,
    image: pizzaPhiladelphia
  },
]