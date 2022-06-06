const products = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 },
];

// .find e .findIndex
const iPhone = products.find(product => product.name === 'iPhone');
const iPhonePosition = products.findIndex(product => product.name === 'iPhone');


// .some e .every
const isSomeProductBelow1000 = products.some(product => product.price < 1000);
const isEveryProductsOver1000 = products.every(product => product.price > 1000);


// .map
const productsWithSubtotal = products.map(product => ({
  ...product,
  subtotal: product.quantity * product.price
}));


// .filter
const productsWithQuantityMoreThan1 = products.filter(product => product.quantity < 1);


// .filter
const productsTotal = products.reduce((acc, cur) => {
  return acc + (cur.quantity * cur.price);
}, 0);