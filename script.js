let cartOpened = false

const toggleCart = () => {
    if (cartOpened){
        document.getElementById('cart').style.display = 'none'
        cartOpened = false
    } else {
        document.getElementById('cart').style.display = 'block'
        cartOpened = true
    }
}

const moveProductsList = () => {
    let cart = document.getElementById('cartProducts')
    let firstProduct = cart.firstElementChild
    let lastProduct = cart.lastElementChild

    //switch places of first and second product so that the second product moves up in the list, then append the originally first product to the end of the list
    cart.insertBefore(firstProduct.nextElementSibling, firstProduct)
    cart.appendChild(firstProduct)
}

document.getElementById('cartButton').addEventListener('click', toggleCart)

document.getElementById('moveUp').addEventListener('click', moveProductsList)
document.getElementById('moveDown').addEventListener('click', moveProductsList)

