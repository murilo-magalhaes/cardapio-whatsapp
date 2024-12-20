export interface IAdditional {
  id: string;
  category_id: string; // Adicionais de lanches, de pizzas...
  img_url: string;
  title: string;
  price: number;
}

const additionalsMock: IAdditional[] = [
  // Categoria Burgers
  {
    id: '1',
    category_id: '1',
    img_url: 'https://example.com/images/cheddar.jpg',
    title: 'Extra Cheddar',
    price: 2.5,
  },
  {
    id: '2',
    category_id: '1',
    img_url: 'https://example.com/images/bacon.jpg',
    title: 'Bacon',
    price: 3.0,
  },
  {
    id: '3',
    category_id: '1',
    img_url: 'https://example.com/images/egg.jpg',
    title: 'Fried Egg',
    price: 1.5,
  },
  // Categoria Pizzas
  {
    id: '4',
    category_id: '2',
    img_url: 'https://example.com/images/extra-cheese.jpg',
    title: 'Extra Cheese',
    price: 4.0,
  },
  {
    id: '5',
    category_id: '2',
    img_url: 'https://example.com/images/pepperoni.jpg',
    title: 'Pepperoni',
    price: 5.0,
  },
  {
    id: '6',
    category_id: '2',
    img_url: 'https://example.com/images/olive.jpg',
    title: 'Olives',
    price: 2.0,
  },
];

export default additionalsMock;
