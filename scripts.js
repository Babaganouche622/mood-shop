import data from './data.js'

const itemsContainer = document.querySelector('#items');


for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item';
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image;
	img.width = 300;
	img.height = 300;
	// Add the image to the div
	newDiv.appendChild(img);
	// put new div inside items container
	itemsContainer.appendChild(newDiv);
    // create a paragraph element for a description
    const desc = document.createElement('P');
    // give the paragraph text from the data
    desc.innerText = data[i].desc;
    // append the paragraph to the div
    newDiv.appendChild(desc);
    // do the same thing for price
    const price = document.createElement('P');
    price.innerText = data[i].price;
    newDiv.appendChild(price);
    const button = document.createElement('button');
    // add an  id name to the button
	button.id = data[i].name;
	// creates a custom attribute called data-price. That will hold price for each element in the button
	button.dataset.price = data[i].price;
	button.innerHTML = "Add to Cart";
	newDiv.appendChild(button);
}

const cart = []
function addItem(name, price) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].qty++;
            return
        }
    }

    const item = {name, price, qty: 1}
    cart.push(item);
}
function showItem() {

    console.log(`You have ${getQty()} items in your cart`);
    for (let i = 0; i < cart.length; i++) {
        console.log(`-${cart[i].name} ${cart[i].price} x ${cart[i].qty}`);
    }

    console.log(`Total in cart: $${getTotal()}`);
}

function getQty() {
    let qty = 0;
    for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
    }
    return qty;
}

function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].qty;
    }
    return total.toFixed(2);
}

function removeItem(name) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].qty--
            // cart.splice(i, 1)
            return
        }
    }
}


showItem()
addItem('Apple', 0.99)
addItem('Orange', 1.29)