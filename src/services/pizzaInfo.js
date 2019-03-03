const ING = {
  bacon: {text: 'бекон', icon: String.fromCodePoint(0x1F953)},
  balsamicSauce: {text: 'бальзамический соус', icon: String.fromCodePoint(0x1F375)},
  basil: {text: 'базилик', icon: String.fromCodePoint()},
  bbqSauce: {text: 'соус BBQ', icon: String.fromCodePoint()},
  beef: {text: 'говядина', icon: String.fromCodePoint(0x1F969)},
  bellPepper: {text: 'болгарский перец', icon: String.fromCodePoint()},
  blueCheese: {text: 'с Плесенью', icon: String.fromCodePoint(0x1F9C0)},
  champignon: {text: 'шампиньоны', icon: String.fromCodePoint(0x1F344)},
  cheddar: {text: 'Чеддер', icon: String.fromCodePoint(0x1F9C0)},
  chicken: {text: 'цыпленок', icon: String.fromCodePoint(0x1F357)},
  chorizo: {text: 'Чоризо', icon: String.fromCodePoint()},
  creamCheese: {text: 'Сливочный', icon: String.fromCodePoint(0x1F9C0)},
  cucumber: {text: 'огурчик', icon: String.fromCodePoint(0x1F952)},
  fetaCheese: {text: 'Фета', icon: String.fromCodePoint(0x1F9C0)},
  garlic: {text: 'чеснок', icon: String.fromCodePoint(0x1F9C4)},
  garlicSauce: {text: 'чесночный соус', icon: String.fromCodePoint(0x1F375)},
  ham: {text: 'ветчина', icon: String.fromCodePoint()},
  jalapeno: {text: 'халапеньо', icon: String.fromCodePoint(0x1F336)},
  mozarella: {text: 'Моцарелла', icon: String.fromCodePoint(0x1F9C0)},
  olives: {text: 'маслины', icon: String.fromCodePoint()},
  onion: {text: 'лук', icon: String.fromCodePoint(0x1F330)},
  oregano: {text: 'орегано', icon: String.fromCodePoint()},
  parmesan: {text: 'Пармезан', icon: String.fromCodePoint()},
  parsley: {text: 'петрушка', icon: String.fromCodePoint(0x2618)},
  pepperroni: {text: 'Пеперрони', icon: String.fromCodePoint()},
  pineapple: {text: 'ананас', icon: String.fromCodePoint()},
  pork: {text: 'свинина', icon: String.fromCodePoint(0x1F356)},
  spinach: {text: 'шпинат', icon: String.fromCodePoint(0x1F96C)},
  tomatoes: {text: 'помидоры', icon: String.fromCodePoint(0x1F345)},
  tomatoSauce: {text: 'томатный соус', icon: String.fromCodePoint()},
};

const pizzas = [
  {
    title: 'Суприм Цыпленок',
    image: 'https://timspizza.ru/upload/goods/db3511be0d.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.tomatoes,
      ING.bellPepper,
      ING.olives
    ],
  },
  {
    title: 'Маленькая Италия',
    image: 'https://timspizza.ru/upload/goods/c3e8341971.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pepperroni,
      ING.champignon,
      ING.olives,
      ING.oregano
    ],
  },
  {
    title: 'Филадельфия Чиз',
    image: 'https://timspizza.ru/upload/goods/4e9ce4fe8d.jpg',
    ingredients: [
      ING.cheddar,
      ING.mozarella,
      ING.beef,
      ING.onion,
      ING.bellPepper,
      ING.champignon
    ],
  },
  {
    title: 'Мясное безумие',
    image: 'https://timspizza.ru/upload/goods/79cc8ea0f3.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pepperroni,
      ING.chorizo,
      ING.beef,
      ING.chicken,
      ING.ham
    ],
  },
  {
    title: 'Халапеньо BBQ',
    image: 'https://timspizza.ru/upload/goods/e70b50bd0e.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.bbqSauce,
      ING.mozarella,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.pineapple,
      ING.jalapeno
    ],
  },
  {
    title: 'Четыре Сыра',
    image: 'https://timspizza.ru/upload/goods/4ef1fe45c8.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.creamCheese,
      ING.parmesan,
      ING.blueCheese,
      ING.basil,
      ING.oregano
    ],
  },
  {
    title: 'Цыпленок Филадельфия',
    image: 'https://timspizza.ru/upload/goods/8dabf1c18a.jpg',
    ingredients: [
      ING.creamCheese,
      ING.mozarella,
      ING.parmesan,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.tomatoes,
      ING.garlic,
      ING.parsley
    ],
  },
  {
    title: 'Цыпленок и томаты',
    image: 'https://timspizza.ru/upload/goods/8dabf1c18a.jpg',
    ingredients: [
      ING.creamCheese,
      ING.mozarella,
      ING.parmesan,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.tomatoes,
      ING.garlic,
      ING.parsley
    ],
  },
  {
    title: 'Цыпленок BBQ',
    image: 'https://timspizza.ru/upload/goods/9dc89275f9.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.bbqSauce,
      ING.mozarella,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.oregano
    ],
  },
  {
    title: 'Бекон и 4 cыра',
    image: 'https://timspizza.ru/upload/goods/9c22628faa.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.fetaCheese,
      ING.creamCheese,
      ING.parmesan,
      ING.bacon
    ],
  },
  {
    title: 'Гавайи BBQ',
    image: 'https://timspizza.ru/upload/goods/c4f6d39936.jpg',
    ingredients: [
      ING.bbqSauce,
      ING.mozarella,
      ING.chicken,
      ING.bacon,
      ING.onion,
      ING.pineapple
    ],
  },
  {
    title: 'Дабл Пепперони',
    image: 'https://timspizza.ru/upload/goods/a2180375d3.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pepperroni
    ],
  },
  {
    title: 'Ветчина и грибы',
    image: 'https://timspizza.ru/upload/goods/cdb2eb79a0.jpg',
    ingredients: [
      ING.garlicSauce,
      ING.mozarella,
      ING.ham,
      ING.champignon,
      ING.oregano
    ],
  },
  {
    title: 'Гавайская',
    image: 'https://timspizza.ru/upload/goods/3ef3846bc6.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.ham,
      ING.pineapple
    ],
  },
  {
    title: 'Маргарита',
    image: 'https://timspizza.ru/upload/goods/1ad7e697cc.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.basil,
      ING.oregano
    ],
  },
  {
    title: 'Вегетарианская',
    image: 'https://timspizza.ru/upload/goods/24a710c84f.jpg',
    ingredients: ['Сливочный сыр',
      ING.mozarella,
      ING.tomatoes,
      ING.olives,
      ING.champignon,
      ING.onion,
      ING.bellPepper,
      ING.parsley
    ],
  },
  {
    title: 'Рэнч',
    image: 'https://timspizza.ru/upload/goods/2d4849278e.jpg',
    ingredients: ['Рэнч соус',
      ING.mozarella,
      ING.chicken,
      ING.ham,
      ING.tomatoes,
      ING.garlic,
    ],
  },
  {
    title: 'Мясная',
    image: 'https://timspizza.ru/upload/goods/c2b670f2ba.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pork,
      ING.pepperroni,
      ING.bacon,
      ING.ham
    ],
  },
  {
    title: 'Суприм',
    image: 'https://timspizza.ru/upload/goods/1532f0d823.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pepperroni,
      ING.pork,
      ING.bacon,
      ING.champignon,
      ING.onion,
      ING.olives,
      ING.bellPepper
    ],
  },
  {
    title: 'Пеперони',
    image: 'https://timspizza.ru/upload/goods/c97c8801f3.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.pepperroni
    ],
  },
  {
    title: 'Тимс',
    image: 'https://timspizza.ru/upload/goods/a6f38fad0b.jpg',
    ingredients: ['Сливочный сыр',
      ING.mozarella,
      ING.bacon,
      ING.ham,
      ING.champignon,
      ING.tomatoes,
      ING.spinach
    ],
  },
  {
    title: 'Чизбургер',
    image: 'https://timspizza.ru/upload/goods/4782cafb59.jpg',
    ingredients: [
      ING.cheddar,
      ING.mozarella,
      ING.beef,
      ING.bacon,
      ING.onion,
      ING.tomatoes,
      ING.cucumber
    ],
  },
  {
    title: 'Шпинат и Бекон',
    image: 'https://timspizza.ru/upload/goods/bad6c60044.jpg',
    ingredients: [
      ING.balsamicSauce,
      ING.creamCheese,
      ING.mozarella,
      ING.bacon,
      ING.champignon,
      ING.spinach
    ],
  },
  {
    title: 'Шпинат и 4 Сыра',
    image: 'https://timspizza.ru/upload/goods/4749967ee4.jpg',
    ingredients: [
      ING.balsamicSauce,
      ING.tomatoSauce,
      ING.mozarella,
      ING.fetaCheese,
      ING.parmesan,
      ING.creamCheese,
      ING.spinach
    ],
  },
  {
    title: 'Бекон Чеддер',
    image: 'https://timspizza.ru/upload/goods/20c967ddff.jpg',
    ingredients: [
      ING.cheddar,
      ING.mozarella,
      ING.parmesan,
      ING.bacon,
      ING.ham
    ],
  },
  {
    title: 'Деревенская',
    image: 'https://timspizza.ru/upload/goods/f07ba78492.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.mozarella,
      ING.ham,
      ING.bacon,
      ING.chorizo,
      ING.champignon,
      ING.bellPepper,
      ING.tomatoes,
      ING.basil
    ],
  },
  {
    title: 'Техас',
    image: 'https://timspizza.ru/upload/goods/c26792dfd6.jpg',
    ingredients: [
      ING.bbqSauce,
      ING.mozarella,
      ING.fetaCheese,
      ING.beef,
      ING.ham,
      ING.jalapeno,
      ING.onion,
      ING.tomatoes,
      ING.bacon
    ],
  },
  {
    title: 'Мексика',
    image: 'https://timspizza.ru/upload/goods/50c0bd73da.jpg',
    ingredients: [
      ING.tomatoSauce,
      ING.chicken,
      ING.mozarella,
      ING.champignon,
      ING.onion,
      ING.bellPepper,
      ING.tomatoes,
      ING.jalapeno
    ],
  },
];

function getPizza(name) {
  return pizzas.find(pizza => {
    return name.toLocaleLowerCase().indexOf(pizza.title.toLocaleLowerCase()) >= 0;
  });
}

class PizzaInfo {
  getPizzaImageUrl(name) {
    const pizza = getPizza(name);
    return pizza ? pizza.image : '🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔';
  }

  getPizzaIngredients(name) {
    const pizza = getPizza(name);
    return pizza ? pizza.ingredients : [];
  }
}

export default new PizzaInfo();