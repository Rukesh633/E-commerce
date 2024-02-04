const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "IRON MAN",
    price: 2000,
    colors: [
      {
        code: "black",
        img: "./img/ironman.png",
      },
      {
        code: "darkblue",
        img: "./img/ironman.png",
      },
    ],
  },
  {
    id: 2,
    title: "CAPTAIN AMERICA",
    price: 1650,
    colors: [
      {
        code: "lightgray",
        img: "./img/captain_america.png",
      },
      {
        code: "green",
        img: "./img/captain_america.png",
      },
    ],
  },
  {
    id: 3,
    title: "THOR",
    price: 1300,
    colors: [
      {
        code: "lightgray",
        img: "./img/thor.png",
      },
      {
        code: "green",
        img: "./img/thor.png",
      },
    ],
  },
  {
    id: 4,
    title: "GAUNTLET",
    price: 1000,
    colors: [
      {
        code: "black",
        img: "./img/gauntlet.png",
      },
      {
        code: "lightgray",
        img: "./img/gauntlet.png",
      },
    ],
  },
  {
    id: 5,
    title: "KEY-CHAINS",
    price: 1000,
    colors: [
      {
        code: "gray",
        img: "./img/keychains.png",
      },
      {
        code: "black",
        img: "./img/keychains.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price + "/-";
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
