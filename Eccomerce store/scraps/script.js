let products = [
  {
    name: "Nike ZoomX Streakfly",
    img: "./images/product1.jpeg",
    tag: "streakfly",
    price: 230,
    inCart: 0,
  },
  {
    name: "Nike Metcon 7",
    img: "./images/product2.jpeg",
    tag: "metcon",
    price: 190,
    inCart: 0,
  },
  {
    name: "Nike Zoom Alphafly",
    img: "./images/product3.jpeg",
    tag: "alphafly",
    price: 370,
    inCart: 0,
  },
  {
    name: "Air Kukini SE",
    img: "./images/product4.jpeg",
    tag: "kukini",
    price: 200,
    inCart: 0,
  },
  {
    name: "LeBron 19 Low",
    img: "./images/product5.jpeg",
    tag: "lebron",
    price: 230,
    inCart: 0,
  },
  {
    name: "Nike SuperRep Go 3",
    img: "./images/product6.jpeg",
    tag: "go",
    price: 150,
    inCart: 0,
  },
  {
    name: "Nike Air Force 1 07 LV8",
    img: "./images/product7.jpeg",
    tag: "airforce",
    price: 170,
    inCart: 0,
  },
  {
    name: "Nike Zoom Metcon Turbo 2",
    img: "./images/product8.jpeg",
    tag: "turbo",
    price: 220,
    inCart: 0,
  },
];

// Open & close cart
const cartBtn = document.querySelectorAll(".cart-btn");
const openCart = document.querySelector(".open-cart");
const closeCart = document.querySelector(".close-cart");
const cart = document.querySelector(".cart");

openCart.addEventListener("click", () => {
  cart.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cart.style.display = "none";
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Remove Items From Cart
  const removeCartButton = document.getElementsByClassName("remove-btn");

  console.log(removeCartButton);
  for (let i = 0; i < removeCartButton.length; i++) {
    const button = removeCartButton[i];
    button.addEventListener("click", removeCartItem);
  }
}

// Remove items fromCart

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}
