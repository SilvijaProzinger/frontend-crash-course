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

const moveProductsUp = () => {
    let cart = document.getElementById('cartProducts')
    let firstProduct = cart.firstElementChild

    //append the originally first product to the end of the list so that the list can move up 
    cart.appendChild(firstProduct)
}

const moveProductsDown = () => {
    let cart = document.getElementById('cartProducts')
    let lastProduct = cart.lastElementChild

    //append the originally last product to the start of the list so that the list can move down 
    cart.prepend(lastProduct)
}

document.getElementById('cartButton').addEventListener('click', toggleCart)

document.getElementById('moveUp').addEventListener('click', moveProductsUp)
document.getElementById('moveDown').addEventListener('click', moveProductsDown)

