  // Function der henter vores data
  export async function fetchProducts() {
    try {
        const response = await fetch('https://mcd-web-legekrogen-server.vercel.app/products');
        const products = await response.json();
        
        return products.data;

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

  export async function fetchProducts() {
    try {
        const response = await fetch('https://mcd-web-legekrogen-server.vercel.app/reviews');
        const products = await response.json();
        
        return reviews.data;

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

export async function fetchProducts() {
    try {
        const response = await fetch('https://mcd-web-legekrogen-server.vercel.app/questions');
        const products = await response.json();
        
        return reviews.data;

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}