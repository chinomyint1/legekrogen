export const templates = () => {

    const navTemplate = () => {
        return`
         <div>Navbar</div>
        
        `
    }


    const navContent = document.getElementById('.nav-content')

    if(navContent) return;
    navContent.insertAdjacentHTML('beforeend', navTemplate())
 

     const headerTemplate = () => {
        return `
            <div>Header</div>
        `
    }

    const headerContainer = document.querySelector('.header-container')

    if(!headerContainer) return;

    headerContainer.insertAdjacentHTML('beforeend', headerTemplate())
}

