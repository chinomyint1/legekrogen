import { fetchProducts } from "./fetch_data.js";
import { productListTemplate } from "./templates.js";

const products = await fetchProducts()

export const productlist = () => {
    console.log(products)
    const productListContainer = document.querySelector('.product-list-container')

if(!productListContainer) return;

    products.forEach(element => {
        productListContainer.insertAdjacentHTML('beforeend', productListTemplate(element))
    });
}