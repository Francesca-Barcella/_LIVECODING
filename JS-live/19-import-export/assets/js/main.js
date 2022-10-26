import { products } from "./db.js"
console.log(products);

const cardElementDom = document.querySelector('.row');

products.forEach(product => {
    console.log(product);

    const { name, image, price, description } = product;
    console.log(name, image, price, description);

    const productCardMarkUp =
    `
        <div class="col">
            <div class="card">
                <img src="https://picsum.photos/200/300" alt="">
                <h4 class="title">${name}</h4>
                <p class="price">€ ${price}</p>
                <p class="text">${description}</p>
                <div>Buy It!</div>
            </div>
        </div>
    `;

    cardElementDom.insertAdjacentHTML( 'beforeend', productCardMarkUp);


})