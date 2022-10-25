import Product from "./classes/Product.js";

const mouse = new Product ('Lenovo', '', 57, 27.35, 'mouse',);
const monitor = new Product ('Hp', '', 33, 159.99, 'schermo 24 pollici',);
const laptop = new Product ('Asusu', '', 33, 159.99, 'slaptop asus',);

const products =[ mouse, monitor, laptop];

export {products};
