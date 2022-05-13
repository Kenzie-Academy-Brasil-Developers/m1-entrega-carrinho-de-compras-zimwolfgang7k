const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },

    {
        id: 2,
        name: "Vinho Cancao",
        price: 17.98
    },

    {
        id: 3,
        name: "Agua de Coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamao",
        price: 9.98
    },
    {
        id: 5,
        name: "Agua Tonica",
        price: 17.98
    },
]
//CRIANDO OS ELEMENTOS NO HTML
const main              = document.createElement("main")
const body              = document.querySelector("body")
const productList       = document.createElement("ul")
let   productItems      = document.createElement("li")
const productDetails    = document.createElement("section")
const buttonEnd         = document.createElement("button")
let somaTotal         = document.createElement("p")
//COLOCANDO CADA ELEMENTO DENTRO DO OUTRO
body.appendChild(main)
main.appendChild(productList)
main.appendChild(productDetails)
productList.appendChild(productItems)
productDetails.appendChild(somaTotal)
productDetails.appendChild(buttonEnd)

buttonEnd.innerText = "Finalizar"



const inicializarProducts = () => {
    productsCart.map((val)=>{
        productItems.innerHTML += `
        <li>${val.name}</li>
        <p>${val.price}<p/>
        `
    })
}
const somarTotalPrice = () => {
    let total = productsCart.reduce((total, val) => total + val.price, 0)
    somaTotal.innerHTML = `<p>Total: ${total}</p>`
}
inicializarProducts()
somarTotalPrice()
