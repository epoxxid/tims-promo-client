import pizza4cheese from '../img/4-cheese.jpg';
import pizzaJalapenoBbq from '../img/jalapeno-bbq.jpg';
import pizzaSupreme from '../img/supreme.jpg';
import pizzaCheeseburger from '../img/cheeseburger.jpg';
import pizzaPhiladelphia from '../img/philadelphia-chicken.jpg';

export default [
  {
    name: 'Четыре сыра',
    size: 30,
    code: 'C004',
    validTo: '22.03.19',
    price: 599.00,
    image: pizza4cheese
  },
   {
    name: 'Халапеньо BBQ',
    size: 25,
    code: 'C97',
    validTo: '',
    price: 469.00,
    image: pizzaJalapenoBbq
  },
  {
    name: 'Суприм',
    size: 30,
    code: 'C008',
    validTo: '22.03.18',
    price: 599.00,
    image: pizzaSupreme
  },
  {
    name: 'Чизбургер',
    size: 25,
    code: 'C84',
    validTo: '12.12.19',
    price: 499.00,
    image: pizzaCheeseburger
  },
  {
    name: 'Цыпленок Филадельфия',
    size: 25,
    code: 'C123',
    validTo: '01.04.19',
    price: 529.00,
    image: pizzaPhiladelphia
  },
];