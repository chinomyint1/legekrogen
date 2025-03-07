  // Function der henter vores data
  export async function fetchProducts() {
    try {
        const response = await fetch('https://legekrogen.webmcdm.dk/products');
        const products = await response.json();
        
        return products;

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}