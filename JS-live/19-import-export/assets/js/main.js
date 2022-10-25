import { products } from "./db.js"
console.log(products);

const cardElementDom = document.querySelector('.row');

products.forEach(product => {
    console.log(product);

    const { image, name, price } = product;
    console.log(image, name, price);

    const productCardMarkUp =
        `
    <div class="col">
        <div class="card">
            <img>
            <h4 class="title">name</h4>
            <p class="text">description</p>
            <p class="price">price</p>
        </div>
        <div>Buy It!</div>
    </div>
    `

    cardElementDom.insertAdjacentElement(productCardMarkUp);


})