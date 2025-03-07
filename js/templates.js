export const templates = () => {


 const insertTemplate = (selector, templateFunction) => {
const htmlContainer = document.querySelector(selector)
 
 if(!htmlContainer) return;

        htmlContainer.insertAdjacentHTML('beforeend', templateFunction())

}

    const navTemplate = () => {
        return`
         <div>Navbar</div>
        
        `
    }

insertTemplate('.nav-container', navTemplate)

   
 

     const headerTemplate = () => {
        return `
            <div>Header</div>
        `
    }

     insertTemplate('.header-container', headerTemplate)
}

