// Products Array
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

for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("click", () => {
    cart.style.display = "block";
    addCartNumber(products[i]);
    totalCost(products[i]);
  });
}

// Cart

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart-number").textContent = productNumbers;
  }
}

function addCartNumber(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart-number").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart-number").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("my cartItems are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log("the product price is", product.price);

  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".cart-box-container");
  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="cart-box">
      <img src="${item.img}" class="cart-img" />
      
      <div class="cart-details">
      <div class="cart-product-title">${item.name}</div>
      <div class="cart-price">$${item.price}</div>
      <input type="number" value="1" class="cart-quantity" />
    </div>
    
    <button class="cart-remove-btn">
      <i class="fa fa-trash" aria-hidden="true"></i>
    </button>

      </div>
      `;
    });
  }
}

onLoadCartNumbers();

displayCart();
