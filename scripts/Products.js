import { getProducts } from "./database.js"

//Add event listenet for when the document is clicked.
document.addEventListener(
    "click",
    (e) => {
        //Define a variable storing the html element that is clicked
        const itemClicked = e.target
        //Code block that runs if the html element is a product.
        if (itemClicked.id.startsWith("product")) {
            //Split the element ID into two parts separated by "--" and store the 
            //ID number in a variable, call it primary key.
            const [, primaryKey] = itemClicked.id.split("--")
            //compare primary key with array of products to find a match.
            for (let product of products) {
                if (product.id === parseInt(primaryKey)) {
                    //Make a window alert that displays the price property on the object.
                    window.alert(`$${product.price}`)


                }
            }
        }
    }
)

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

