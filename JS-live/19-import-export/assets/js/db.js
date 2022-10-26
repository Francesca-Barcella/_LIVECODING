import Product from "./classes/Product.js";

const mouse = new Product ('Lenovo', 'https://picsum.photos/200/300', 57, 27.35, 'mouse',);
const monitor = new Product ('Hp', 'https://picsum.photos/200/300', 33, 159.99, 'schermo 24 pollici',);
const laptop = new Product ('Asusu', './assets/img/partner.png', 33, 359.99, 'laptop asus',);

const products =[ mouse, monitor, laptop];

export {products};

console.log(typeof Product + ' (typeof di Product)');
console.log(typeof products + ' (typeof di products)');

