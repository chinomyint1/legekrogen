const templates = () => {

    const navTemplate = () => {
        return
        `
         
        <div>Navbar</div>
        
        
        `
    }


    const navContent = document.getElementById('.nav-content')

    if(navContent) return;
    navContent.insertAdjacentHTML('beforeend', navTemplate())
 
}

export default templates