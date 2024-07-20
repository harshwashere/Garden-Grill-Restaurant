const menu = document.querySelector(".menubtn ");

menu.addEventListener("click", () => {
  location.href = "menu";
});

const cardpanel = document.getElementById("cardform");
const upipanel = document.getElementById("upiform");

function cardPanel() {
  let card = cardpanel;
  card.style.display = "block";
  upipanel.style.display = "none";
  codpanel.style.display = "none";
}

function upiPanel() {
  let upi = upipanel;
  upi.style.display = "block";
  cardpanel.style.display = "none";
  codpanel.style.display = "none";
}

let codpanel = document.getElementById("codform");

function codPanel() {
  let cod = codpanel;
  cod.style.display = "block";
  cardpanel.style.display = "none";
  upipanel.style.display = "none";
}

// const meals = document.getElementById(".meals")
// var cartItem = document.createElement("li");

// function addToCart(foodname, price) {
//     // Create a new list item for the cart
//     var cartItem = document.createElement("li");
//     cartItem.classList("food")
//     cartItem.innerHTML = `<div>${value.foodname}</div>
//     <div>${value.price.toLocaleString()}</div>
//     <div>
//         <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//         <div class="count">${value.quantity}</div>
//         <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//     </div>`;
//     cartItem.textContent = foodname + " - ₹" + price;

//     // Append the item to the cart
//     meals.appendChild(cartItem);

//     // Update the total price
//     updateCartTotal(price);
// }

// // Function to update the total price in the cart
// function updateCartTotal(price) {
//     var cartTotalElement = document.querySelector(".totalPrice");
//     var currentTotal = parseFloat(cartTotalElement.textContent);
//     var newTotal = currentTotal + price;

//     // Round to two decimal places
//     newTotal = Math.round(newTotal * 100) / 100;

//     // Update the total in the cart
//     cartTotalElement.textContent = newTotal;
// }
// function changeQuantity(key, quantity) {
//     if (quantity == 0) {
//         delete listCards[key];
//     } else {
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }

// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.menucon');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.totalPrice');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'Mosambi Juice',
//         price: 100
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
// listCard.innerHTML = '';
// let count = 0;
// let totalPrice = 0;
// listCards.forEach((value, key)=>{
//     totalPrice = totalPrice + value.price;
//     count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.==innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }

function addToCart(foodname, price) {
  const meals = document.getElementById("meals");
  const cartItem = document.createElement("div");
  cartItem.classList("food");
  cartItem.innerHTML = `<div>${value.foodname}</div>
    <div>${value.price.toLocaleString()}</div>
    <div>
        <button onclick="changeQuantity(${key}, ${
    value.quantity - 1
  })">-</button>
         <div class="count">${value.quantity}</div>
         <button onclick="changeQuantity(${key}, ${
    value.quantity + 1
  })">+</button></div>`;
  cartItem.textContent = foodname + " - ₹" + price;

  // Append the item to the cart
  meals.appendChild(cartItem);

  // Update the total price
  updateCartTotal(price);
}

function updateCartTotal(price) {
  const cartTotalElement = document.querySelector(".totalPrice");
  const currentTotal = parseFloat(cartTotalElement.textContent);
  const newTotal = currentTotal + price;

  // Round to two decimal places
  newTotal = Math.round(newTotal * 100) / 100;

  // Update the total in the cart
  cartTotalElement.textContent = newTotal;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
