import { fetchProducts } from "./fetch_data.js";

const products = await fetchProducts()

export const productlist = () => {
    console.log(products)
    const productListContainer = document.querySelector('.product-list-container')

    products.forEach(element => {
        productListContainer.insertAdjacentHTML('beforeend', productListTemplate(element))
    });
}