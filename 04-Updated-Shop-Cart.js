let cartQuantity = 0

function updateCartQuantity(value){
    if(cartQuantity + value > 10){
        alert('The cart is full')
        console.log('The cart is full')
    } else if(cartQuantity + value < 0){
        alert('Not enough items on cart')
        console.log('Not enough items on cart')
    } else {
        cartQuantity += value
        console.log(`Cart quantity: ${cartQuantity}`)
    }
}

