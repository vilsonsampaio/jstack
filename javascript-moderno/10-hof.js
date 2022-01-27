const products = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find e .findIndex
const iPhone = products.find(product => product.name === 'iPhone');
const iPhonePosition = products.findIndex(product => product.name === 'iPhone');
console.log({ iPhone, iPhonePosition });