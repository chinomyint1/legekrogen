import { fetchProducts } from "./fetch_data.js";

const products = await fetchProducts()

export const productlist = () => {
    console.log(products)
}